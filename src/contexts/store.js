import { useContext } from "react";
import { HomeStoreContext } from "./HomeStore";

export default {
    home: () => useContext(HomeStoreContext),
}