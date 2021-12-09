import { getRepos } from '@services/homeServices';
import React, { createContext, useState } from 'react'

export const HomeStoreContext = createContext();
const initialState = {
    results: [],
    loading: false
}
export default function HomeStoreProvider({ children }) {
    const [state, setState] = useState(initialState);
    const getGithubRepositories = async (payload) => {
        setState({...state, loading: true})
        const data = await getRepos(payload);
        setState({...state, loading: false, results: data})
    }
    const values = {...state, getGithubRepositories }
    return (
        <HomeStoreContext.Provider value={values}>
            { children }            
        </HomeStoreContext.Provider>
    )
}
