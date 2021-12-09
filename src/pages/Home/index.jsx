import React from 'react'
import Component from '@components/Home'
import { withContext } from '@components/hoc';

function Home({ home }) {
    return (
        <>
            <Component home={home} />
        </>
    )
}
export default withContext(Home)