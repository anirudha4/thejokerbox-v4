import React, { useState } from 'react'
import { Card, Divider } from 'antd';
import { motion } from 'framer-motion';
import styled from 'styled-components'
import { MdClose, MdAttachFile } from 'react-icons/md'
import { HiFolderOpen } from 'react-icons/hi'
import { Button, Flex, FlexBetween, Space } from '@components/custom'
import FileCard from './FileCard';
import For from '@components/common/For';
import { colors, fonts, styles } from '@themes';
import Avatar from 'antd/lib/avatar/avatar';

const FilesContainer = styled.div`

`;
const FileGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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


const FileToUpload = ({file, id, deleteFileFromLocalArray}) => {
    return (
        <File>
            <FlexBetween>
                <FlexBetween>
                    <Avatar src="https://joeschmoe.io/api/v1/random" />
                    <Space right=".5em" />
                    <strong>{file.name}</strong>
                </FlexBetween>
                <MdClose style={{ cursor: 'pointer' }} onClick={e => deleteFileFromLocalArray(id)}  size={18} />
            </FlexBetween>
        </File>
    )
}

export default function Files() {
    const [fileUploadModal, setFileUploadModal] = useState(false);
    const openFileModal = () => setFileUploadModal(true);
    const [mockFiles, setMockFiles] = useState([])
    const [files, setFiles] = useState([]);
    const deleteFileFromLocalArray = (id) => {
        const filteredFiles = files.filter((_, idx) => id !== idx)
        setFiles(filteredFiles);
    }
    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        setFiles([...files, file])
        console.log({ file });
    }
    const handleUpload = () => {
        setMockFiles([...mockFiles, ...files]);
        setFiles([]);
        setFileUploadModal(false);
    }
    return (
        <FilesContainer>
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
                        <input onChange={handleFileSelect} type="file" id='file' style={{ display: 'none' }} />
                        <Space top="2em" />
                        <UploadLayer htmlFor="file">
                            <HiFolderOpen size={30} />
                            <Space top=".5em" />
                            <strong style={{ fontSize: fonts.fontMedium }}>Choose Files</strong>
                        </UploadLayer>
                        <Space top="1em" />
                        <For 
                            Parent={UploadList}
                            items={files}
                            renderItem={(file, idx) => {
                                return (
                                    <FileToUpload deleteFileFromLocalArray={deleteFileFromLocalArray} file={file} id={idx} />
                                )
                            }}
                        />
                        <Space top="1.5em" />
                        <Button disabled={!files.length} onClick={handleUpload} type='primary' width="100%">Upload</Button>
                    </UploadModal>
                </ModalCover>
            )}
            <FlexBetween>
                <strong style={{ fontSize: 20 }}>Your Files</strong>
                <Button onClick={openFileModal} size="fontMedium" type='primary'>Upload File</Button>
            </FlexBetween>
            <Space top="1.5em" />
            <Divider />
            {!!mockFiles.length ? (
                <For 
                    Parent={FileGrid}
                    items={mockFiles}
                    renderItem={(item, key) => {
                        return (
                            <FileCard file={item} />
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
