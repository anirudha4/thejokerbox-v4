import { Container, MenuItem, Space } from '@components/custom'
import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Recents from '@components/Recents'
import Files from '@components/Files'
import { Menu } from 'antd'
import styled from 'styled-components'
import Input from '@components/custom/Input'

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 2em;
    align-items: flex-start;
`;
const Right = styled.div``;
export default function Dashboard() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const activeKey = query.get('key');
    return (
        <Container>
            <Space top="2em" />
            <GridContainer>
                <Menu defaultSelectedKeys={[activeKey]}>
                    <MenuItem key={1}>
                        <Link to="/dashboard?key=1">Files</Link>
                    </MenuItem>
                    <MenuItem key={2}>
                        <Link to="/dashboard/recents?key=2">Recents</Link>
                    </MenuItem>
                    <MenuItem key={3}>
                        <Link to="/dashboard/profile?key=3">Profile</Link>
                    </MenuItem>
                    <MenuItem key={4}>
                        <Link to="/dashboard/settings?key=4">Settings</Link>
                    </MenuItem>
                </Menu>
                <Right>
                    <Input placeholder="Search for files" />
                    <Space top="2em" />
                    <Routes>
                        <Route path="/" element={<Files />} />
                        <Route path="/recents" element={<Recents />} />
                    </Routes>
                </Right>
            </GridContainer>
        </Container>
    )
}
