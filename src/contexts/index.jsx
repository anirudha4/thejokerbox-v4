import React from 'react'
import HomeStoreProvider from './HomeStore'

export default function ContextWrapper({children}) {
    return (
        <>
            <HomeStoreProvider>
                {children}
            </HomeStoreProvider>
        </>
    )
}
