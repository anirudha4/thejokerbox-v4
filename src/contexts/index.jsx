import React from 'react'
import AuthStore from './AuthStore'
import HomeStoreProvider from './HomeStore'

export default function ContextWrapper({children}) {
    return (
        <>
            <AuthStore>
                <HomeStoreProvider>
                    {children}
                </HomeStoreProvider>
            </AuthStore>
        </>
    )
}
