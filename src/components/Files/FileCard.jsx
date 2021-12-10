import React from 'react'
import styled from 'styled-components';
import { Avatar, Card, Dropdown, Menu } from 'antd';
import { GrMore } from "react-icons/gr";
import { MenuItem } from '@components/custom';

import { colors, styles } from '@themes';

const CustomCard = styled(Card)`
    max-width: 500px;
    transition: box-shadow .2s;
    &:hover {
        box-shadow: 10px 10px 20px rgba(0,0,0,0.03);
    }
    cursor: initial;
`;
const { Meta } = Card;

export default function FileCard({ file }) {

    const FileMenuOverlay = ({ file }) => {
        return (
            <Menu direction='ltr' style={{ width: '10rem', border: `2px solid ${colors.greyLight}`, borderRadius: styles.borderRadius }} >
                <MenuItem style={{ fontSize: 14 }}>
                    Rename
                </MenuItem>
                <MenuItem style={{ fontSize: 14 }}>
                    Download
                </MenuItem>
                <MenuItem style={{ fontSize: 14 }}>
                    Share
                </MenuItem>
                <MenuItem style={{ fontSize: 14 }}>
                    Delete
                </MenuItem>
            </Menu>
        )
    }

    return (
        <CustomCard
            style={{ position: 'relative', cursor: 'pointer' }}
        >
            <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={file.name}
                description={file.size}
            />
            <div style={{ position: 'absolute',  top: 10, right: 10 }}>
                <Dropdown overlay={<FileMenuOverlay file={{}} />} trigger={['click']}>
                        <GrMore />
                </Dropdown>
            </div>
        </CustomCard>
    )
}
