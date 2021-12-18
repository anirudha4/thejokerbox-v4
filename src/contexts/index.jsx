import React from 'react'
import AuthStore from './AuthStore'
import FileStore from './FileStore'
import HomeStoreProvider from './HomeStore'

export default function ContextWrapper({children}) {
    return (
        <>
            <AuthStore>
                <FileStore>
                    <HomeStoreProvider>
                        {children}
                    </HomeStoreProvider>
                </FileStore>
            </AuthStore>
        </>
    )
}
