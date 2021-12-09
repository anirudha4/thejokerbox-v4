import React from 'react'
import styled from 'styled-components';
import For from '@components/common/For';
import Repo from './Repo';
import { Title } from '@components/custom';
import { colors } from '@themes';

const Grid = styled.div``;

export default function Results({ results }) {
    if(!results?.length) return <div style={{ color: colors.text }}>Try Searching Something</div>
    return (
        <>
            <Title>Results</Title>
            <For
                items={results}
                Parent={Grid}
                renderItem={item => (
                    <Repo item={item}/>
                )}
            />
        </>
    )
}
