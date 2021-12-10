import React from 'react'
import Component from '@components/Home'
import { withContext } from '@components/hoc';

function Home({ home, authStore }) {
    return (
        <>
            <Component home={home} authStore={authStore} />
        </>
    )
}
export default withContext(Home)