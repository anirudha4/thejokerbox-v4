import { useContext } from "react";
import { AuthContext } from "./AuthStore";
import { FileContext } from "./FileStore";
import { HomeStoreContext } from "./HomeStore";

export default {
    home: () => useContext(HomeStoreContext),
    authStore: () => useContext(AuthContext),
    filesStore: () => useContext(FileContext)
}