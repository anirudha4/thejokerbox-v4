import { Container, MenuItem, Space } from '@components/custom'
import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Recents from '@components/Recents'
import Files from '@components/Files'
import { Menu } from 'antd'
import styled from 'styled-components'
import Input from '@components/custom/Input'
import { useMediaQuery } from 'react-responsive'

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 2em;
    align-items: flex-start;
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        gap: 1em;
    }
`;
const Right = styled.div`
    max-width: 100%;
`;
export default function Dashboard({ authStore, filesStore }) {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const activeKey = query.get('key');
    const isMobile = useMediaQuery({ query: '(max-width: 600px)'})

    return (
        <Container>
            <Space top="2em" />
            <GridContainer>
                <Menu mode={isMobile ? 'horizontal' : 'vertical'} defaultSelectedKeys={[activeKey]}>
                    <MenuItem key={1}>
                        <Link to="/dashboard?key=1">Files</Link>
                    </MenuItem>
                    <MenuItem key={2}>
                        <Link to="/dashboard/recents?key=2">Recents</Link>
                    </MenuItem>
                    <MenuItem key={3}>
                        <Link to="/dashboard/shared?key=3">Shared with me</Link>
                    </MenuItem>
                    <MenuItem key={4}>
                        <Link to="/dashboard/profile?key=4">Profile</Link>
                    </MenuItem>
                    <MenuItem key={5}>
                        <Link to="/dashboard/settings?key=5">Settings</Link>
                    </MenuItem>
                </Menu>
                <Right>
                    <Input placeholder="Search for files" />
                    <Space top="2em" />
                    <Routes>
                        <Route path="/" element={<Files user={authStore.user} uploadFiles={filesStore.uploadFiles} getFiles={filesStore.getFiles} files={filesStore.files} />} deleteFile={filesStore.deleteFile} />
                        <Route path="/recents" element={<Recents />} />
                    </Routes>
                </Right>
            </GridContainer>
        </Container>
    )
}
