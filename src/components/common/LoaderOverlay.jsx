import React from 'react'
import styled from 'styled-components'
import Loader from "react-loader-spinner";
import { colors } from '@themes';

const LoaderContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-color: rgba(0,0,0,.02);
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    z-index: 10000;
    backdrop-filter: blur(3px);
`;

export default function LoaderOverlay() {
    return (
        <LoaderContainer>
            <Loader
                type="Oval"
                color={colors.primary}
                height={100}
                width={100}
            />
        </LoaderContainer>
    )
}
