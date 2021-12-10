import React from 'react'
import styled from 'styled-components'
import logo from '@assets/logo.svg'
import userImg from '@assets/user-icon.svg'
import { Container, FlexBetween, MenuItem } from '@components/custom';
import { colors, fonts } from '@themes';
import { Dropdown, Menu } from 'antd';

const NavContainer = styled.div`
    padding: 20px 0;
    border-bottom: 2px solid ${colors.greyLight};
`
const Right = styled.div`

`;
const UserProfileThumbnail = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50px;
    border: 2px solid ${colors.greyLight};
    display: flex;
    align-items: center;
    background-color: ${colors.primaryLight};
    justify-content: center;
    cursor: pointer;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;

export default function Navbar({ user, logout }) {
    const profileOverlay = () => (
        <Menu style={{ width: '15rem' }}>
            <MenuItem>
                Profile
            </MenuItem>
            <MenuItem>
                Files
            </MenuItem>
            <MenuItem>
                Account Settings
            </MenuItem>
            <MenuItem danger onClick={async e => await logout()}>
                Logout
            </MenuItem>
        </Menu>
    )
    return (
        <NavContainer>
            <Container>
                <FlexBetween>
                    <img src={logo} width={120} alt="" />
                    <Right>
                        {user && (
                            <Dropdown overlay={profileOverlay} trigger={['click']}>
                                <UserProfileThumbnail>
                                    <img src={userImg} width="50px" height="50px" alt="" />
                                </UserProfileThumbnail>
                            </Dropdown>
                        )}
                    </Right>
                </FlexBetween>
            </Container>
        </NavContainer>
    )
}
