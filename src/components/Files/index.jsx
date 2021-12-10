import React from 'react'
import { Divider } from 'antd';
import styled from 'styled-components'
import { Button, FlexBetween, Space } from '@components/custom'
import FileCard from './FileCard';
import For from '@components/common/For';

const FilesContainer = styled.div`

`;
const FileGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
`;

const MockFiles = [
    {
        id: 1,
        filename: 'resume.pdf',
        size: 256,
        extension: 'pdf',
        previewURL: 'http://localhost:3000/download/resume.pdf'
    },
    {
        id: 2,
        filename: 'passport.jpg',
        size: 887,
        extension: 'jpg',
        previewURL: 'http://localhost:3000/download/passport.jpg'
    },
    {
        id: 3,
        filename: 'Travel.mp4',
        size: 4578,
        extension: 'mp4',
        previewURL: 'http://localhost:3000/download/Travel.mp4'
    },
]

export default function Files() {
    
    return (
        <FilesContainer>
            <FlexBetween>
                <strong style={{ fontSize: 20 }}>Your Files</strong>
                <Button size="fontMedium" type='primary'>Upload File</Button>
            </FlexBetween>
            <Space top="1.5em" />
            <Divider />
            <For 
                Parent={FileGrid}
                items={MockFiles}
                renderItem={(item, key) => {
                    return (
                        <FileCard file={item} />
                    )
                }}
            />
        </FilesContainer>
    )
}
