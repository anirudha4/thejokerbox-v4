import { api } from "@api";

export const getRepos = async (query) => {
    const { data } = await api.get(`/repositories?q=${query}`)
    const { items } = data;
    return items;
}