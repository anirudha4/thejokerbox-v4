import React, { useContext, useState } from 'react'
import { Card, Divider } from 'antd';
import { motion } from 'framer-motion';
import styled from 'styled-components'
import Loader from "react-loader-spinner";
import { MdClose } from 'react-icons/md'
import { HiFolderOpen } from 'react-icons/hi'
import { Button, FlexBetween, FlexCenter, Space } from '@components/custom'
import FileCard from './FileCard';
import For from '@components/common/For';
import { colors, fonts, styles } from '@themes';
import { FileContext } from '@contexts/FileStore';
import LoaderOverlay from '@components/common/LoaderOverlay';

const FilesContainer = styled.div`
    
`;
const FileGrid = styled.div`
    display: grid;
    grid-template-columns:repeat(auto-fill,minmax(180px,1fr));
    gap: 20px;
`;
const UploadModal = styled.div`
    max-width: 600px;
    padding: 1.5em;
    width: 100%;
    background-color: ${colors.white};
    border-radius: ${styles.borderRadius};
`;
const ModalCover = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.06);
    backdrop-filter: blur(3px);
    display: flex;
    align-items: center;
    justify-content: center;
`;
const UploadLayer = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    width: 100%;
    height: 150px;
    border: 2px dashed ${colors.greyLight};
    border-radius: ${styles.borderRadius};
`;
const File = styled(Card)`
    margin: 1.5em 0;
    border-radius: ${styles.borderRadius};
`;
const UploadList = styled.div`
    max-height: 300px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 2px;
        background-color: ${colors.white};
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${colors.primary};
        width: 100%;
    }
`;
const FileAvatar = styled(FlexCenter)`
    height: 50px;
    width: 50px;
    div {
        height: 40px;
        width: 40px;
        font-size: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        background-color: tomato;
        box-shadow: 5px 10px 10px 2px #f7d7d3;
        color: white;
        font-weight: bold;
        border-radius: ${styles.borderRadius};
    }
`;
const Extension = ({file}) => {
    const exts = file.name.split('.');
    return (
        <FileAvatar>
            <div>
                {exts[exts.length - 1]}
            </div>
        </FileAvatar>
    )
}
const FileToUpload = ({file, id, deleteFileFromLocalArray}) => {
    return (
        <File>
            <FlexBetween>
                <FlexBetween>
                    <Extension file={file} />
                    <Space right=".5em" />
                    <strong>{file.name}</strong>
                </FlexBetween>
                <MdClose style={{ cursor: 'pointer' }} onClick={e => deleteFileFromLocalArray(id)}  size={18} />
            </FlexBetween>
        </File>
    )
}

export default function Files({ user, files, uploadFiles, getFiles, ...props }) {
    const { deleteFile } = useContext(FileContext);
    const [loading, setLoading] = useState(false);
    const [fileUploadModal, setFileUploadModal] = useState(false);
    const openFileModal = () => setFileUploadModal(true);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [uploading, setUploading] = useState(false)
    const deleteFileFromLocalArray = (id) => {
        const filteredFiles = selectedFiles.filter((_, idx) => id !== idx)
        setSelectedFiles(filteredFiles);
    }
    const handleFileSelect = (e) => {
        const tempFiles = e.target.files;
        setSelectedFiles([...selectedFiles, ...tempFiles])
    }
    const handleUpload = async () => {
        setUploading(true)
        const formData = new FormData();
        if(selectedFiles.length === 1) {
            formData.append('file', selectedFiles[0])
        }
        else {
            selectedFiles.forEach(file => {
                formData.append('arrayOfFiles', file);
            });
        }
        formData.append('uid', user.uid);
        await uploadFiles(formData);
        setSelectedFiles([]);
        await getFiles();
        setFileUploadModal(false);
        setUploading(false);
    }
    const handleDelete = async (id) => {
        try {
            setLoading(true)
            await deleteFile(id);
            setLoading(false)
        } catch(err) {
            setLoading(false)
        }
    }
    return (
        <FilesContainer>
            {loading && <LoaderOverlay />}
            {fileUploadModal && (
                <ModalCover as={motion.div} transition={{ duration: .3 }} initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }}>
                    <UploadModal>
                        <FlexBetween>
                            <strong style={{ fontSize: fonts.fontLarge }}>Upload File</strong>
                            <MdClose style={{ cursor: 'pointer' }} onClick={() => {
                                    setFileUploadModal(false)
                                    setFiles([])
                                }
                            } size={24} />
                        </FlexBetween>
                        <input multiple onChange={handleFileSelect} type="file" id='file' style={{ display: 'none' }} />
                        <Space top="2em" />
                        <UploadLayer htmlFor="file">
                            <HiFolderOpen size={30} />
                            <Space top=".5em" />
                            <strong style={{ fontSize: fonts.fontMedium }}>Choose Files</strong>
                        </UploadLayer>
                        <Space top="1em" />
                        <For 
                            Parent={UploadList}
                            items={selectedFiles}
                            renderItem={(file, idx) => {
                                return (
                                    <FileToUpload deleteFileFromLocalArray={deleteFileFromLocalArray} file={file} id={idx} />
                                )
                            }}
                        />
                        <Space top="1.5em" />
                        <Button disabled={!selectedFiles.length} onClick={handleUpload} type='primary' width="100%">{uploading ? (
                            <Loader 
                                type="TailSpin"
                                color={colors.primaryLight}
                                height={20}
                                width={20}
                            />
                        ) : 'Upload' }</Button>
                    </UploadModal>
                </ModalCover>
            )}
            <FlexBetween>
                <strong style={{ fontSize: 20 }}>Your Files</strong>
                <Button onClick={openFileModal} size="fontMedium" type='primary'>Upload File</Button>
            </FlexBetween>
            <Space top="1.5em" />
            <Divider />
            {files?.length ? (
                <For 
                    Parent={FileGrid}
                    items={files}
                    renderItem={(item, key) => {
                        return (
                            <FileCard handleDelete={handleDelete} file={item} />
                        )
                    }}
                />
            ) : (
                <>
                    <strong>No Files to display. </strong>
                </>
            )}
        </FilesContainer>
    )
}
