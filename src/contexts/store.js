import { useContext } from "react";
import { AuthContext } from "./AuthStore";
import { HomeStoreContext } from "./HomeStore";

export default {
    home: () => useContext(HomeStoreContext),
    authStore: () => useContext(AuthContext)
}