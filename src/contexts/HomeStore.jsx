import React, { createContext } from 'react'

export const HomeStoreContext = createContext();
export default function HomeStoreProvider({ children }) {
    const values = {}
    return (
        <HomeStoreContext.Provider value={values}>
            { children }            
        </HomeStoreContext.Provider>
    )
}
