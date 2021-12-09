import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Container, FlexBetween } from '@components/custom';
import logo from '@assets/logo.svg';
import { colors, styles } from '@themes';

const NavContainer = styled.div`
    background-color: ${colors.white};
    box-shadow: ${styles.boxShadow};
`;
const Logo = styled(NavLink)`
`;

const Links = styled.div`
`;

const Link = styled(NavLink)`
    display: inline-block;
    padding: 1.2em 1em;
    outline: none;
    color: ${colors.text};
    transition: all .2s;
    border-bottom: 3px solid transparent;
    &.active {
        border-bottom: 3px solid ${colors.primary};
        color: ${colors.primary};
    }
`;

export default function Navbar() {
    return (
        <NavContainer>
            <Container>
                <FlexBetween>
                    <Logo to="/">
                        <img width="120" src={logo} alt="logo" />
                    </Logo>
                    <Links>
                        <Link exact to="/">Home</Link>
                        <Link to="/about">About</Link>
                    </Links>
                </FlexBetween>
            </Container>
        </NavContainer>
    )
}
