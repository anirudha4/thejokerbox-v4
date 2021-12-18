import React, { useState } from 'react'
import styled from 'styled-components';
import { Card, Divider, Dropdown, Menu } from 'antd';
import { GrMore } from "react-icons/gr";
import { FlexCenter, MenuItem } from '@components/custom';

import { colors, styles } from '@themes';


const CustomCard = styled(Card)`
    && {
        transition: box-shadow .2s;
        &:hover {
            box-shadow: 10px 10px 20px rgba(0,0,0,0.03);
        }
        cursor: default !important;   
    }
`;
const ExtCard = styled(FlexCenter)`
    height: 70px;
    div {
        height: 60px;
        width: 60px;
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
const { Meta } = Card;

const Extension = ({ extension }) => {
    const temp = extension.split('.');
    const ext = temp[temp.length - 1];
    return <ExtCard>
        <div>{ext}</div>
    </ExtCard>
}

export default function FileCard({ file, handleDelete }) {
    const [visible, setVisible] = useState(false);
    const handleOpenChange = e => setVisible(e);

    const FileMenuOverlay = ({ file }) => {
        return (
            <Menu selectable={false} onClick={_ => setVisible(false)} style={{ width: '10rem', border: `2px solid ${colors.greyLight}`, borderRadius: styles.borderRadius }} >
                <MenuItem style={{ fontSize: 14 }}>
                    Rename
                </MenuItem>
                <MenuItem style={{ fontSize: 14 }}>
                    Download
                </MenuItem>
                <MenuItem style={{ fontSize: 14 }}>
                    Share
                </MenuItem>
                <MenuItem onClick={() => handleDelete(file._id)} style={{ fontSize: 14 }}>
                    Delete
                </MenuItem>
            </Menu>
        )
    }
    return (
        <CustomCard
            style={{ position: 'relative', cursor: 'pointer' }}
        >
            <Extension extension={file.filename} />
            <Divider />
            <Meta
                title={<strong title={file.filename} style={{ display: 'block', textAlign: 'center', textTransform: 'lowercase' }}>{file.filename}</strong>}
            />
            <div style={{ position: 'absolute',  top: 10, right: 10 }}>
                <Dropdown visible={visible} onVisibleChange={handleOpenChange} overlay={<FileMenuOverlay  file={file} />} trigger={['click']}>
                        <GrMore style={{ cursor: 'pointer' }} />
                </Dropdown>
            </div>
        </CustomCard>
    )
}
