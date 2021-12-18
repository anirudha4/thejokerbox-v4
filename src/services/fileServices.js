import { api } from "@api"

export const uploadFiles = async payload => {
    try {
        const { data: { message, urls } } = await api.post('/files', payload);
        return { message, urls }
    }
    catch(err) {
        return err.message;
    }
}

export const getFiles = async uid => {
    try {
        const { data: { files, length } } = await api.get(`/files/${uid}`);
        return { files, length }
    } catch(err) {
        console.log({ err });
    }
}

export const deleteFile = async id => {
    try {
        const { data: { message, file, success } } = await api.delete(`/files/${id}`);
        return  { message, file, success };
    } catch(err) {
        console.log({ err });
    }
}