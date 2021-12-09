import React, { useState } from 'react'
import Searchbar from './Searchbar'
import Results from './Results'
import { Card, Container, Line, Space, Button } from '@components/custom'


export default function Home({ home }) {
    const { results, loading, getGithubRepositories } = home;
    const [search, setSearch] = useState();
    const handleChange = e => {
        setSearch(e.target.value)
    }
    const handleClick = e => {
        if(search) 
            getGithubRepositories(search)
    }
    return (
        <Container>
            <Space top="2em" bottom="1em" />
            <Card>
                <Searchbar onChange={handleChange} value={search} />
                <Space top="1em" />
                <Button disabled={loading || !search} onClick={handleClick}>{loading ? 'Searching' : 'Search'}</Button>
                <Space top="2em" />
                <Line />
                <Space top="2em" />
                <Results search={search} results={results} />
            </Card>
        </Container>
    )
}
