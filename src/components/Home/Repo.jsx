import React from 'react';
import styled from 'styled-components';
import FeatherIcon from 'feather-icons-react';
import { BorderedCard, Space, Subtitle, Line, FlexBetween } from '@components/custom';
import { colors, fonts, styles } from '@themes';



const User = styled.div`
    display: flex;
`;
const UserDetails = styled.div`
    margin-left: 1em;
`;
const ProfileContainer = styled.div`
    width: 2em;
`;
const Username = styled.p`
    
`;
const RepoDetails = styled.div`

`;
const Profile = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${styles.borderRadius};
`

const ButtonLink = styled.a`
    font-size: ${fonts.fontSmall};
    padding: .7em .8em;
    background-color: ${colors.primary};
    color: ${colors.white};
    font-weight: ${fonts.weight.bold};
    border-radius: ${styles.borderRadius};
    transition: all .2s;
    &:hover {
        background-color: ${colors.primaryDark};
    }
`;

export default function Repo({ item }) {
    return (
        <>
            <Space bottom="1em" />
            <BorderedCard>
                <User>
                    <ProfileContainer>
                        <Profile src={item.owner.avatar_url} />
                    </ProfileContainer>
                    <UserDetails>
                        <Username>{item.owner.login}</Username>
                        <Space top=".3em" />
                        <Subtitle>{item.owner.html_url}</Subtitle>
                    </UserDetails>
                </User>
                <Space bottom="1em" />
                <Line />
                <Space top="1em" />
                <RepoDetails>
                    <Subtitle>REPOSITORY DETAILS</Subtitle>
                    <Space top="1em" />
                    <FlexBetween>
                        <p>{item.name}</p>
                        <ButtonLink target="_blank" href={item.html_url}>
                            <FeatherIcon icon="arrow-right" size="16" />
                        </ButtonLink>
                    </FlexBetween>
                </RepoDetails>
            </BorderedCard>
        </>
    )
}


