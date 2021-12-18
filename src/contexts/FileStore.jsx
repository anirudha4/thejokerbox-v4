import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthStore';
import { message as notification } from 'antd';
import { uploadFiles as uploadFilesFn, getFiles as getFilesFn, deleteFile as deleteFileFn } from '@services/fileServices';

export const FileContext = createContext();
export default function FileStore({ children }) {
    const { user } = useContext(AuthContext);
    const [files, setFiles] = useState(null);
    useEffect(() => {
        if(!user) {
            setFiles(null)
        } else 
            getFiles();
    }, [user])

    const getFiles = async () => {
        const response = await getFilesFn(user.uid);
        console.log({ response });
        setFiles(response.files);
    }
    const uploadFiles = async payload => {
        try {
            const { urls, message } = await uploadFilesFn(payload);
            return urls;
        } catch(err) {
            console.log(err.message);
        }
    }
    const deleteFile = async id => {
        const { file, message, success } = await deleteFileFn(id);
        if(success) {
            notification.success(<strong>{message}</strong>);
            getFiles();
        }
        else {
            notification.error(<strong>{message}</strong>);
        }
    }
    const value={
        files,
        uploadFiles,
        getFiles,
        deleteFile
    }
    return (
        <FileContext.Provider value={value}>
            {children}
        </FileContext.Provider>
    )
}
