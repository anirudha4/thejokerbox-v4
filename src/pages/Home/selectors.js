import { HomeStoreContext } from "@contexts/HomeStore";
import { useContext } from "react";

const useStore = () => useContext(HomeStoreContext);

export { useStore };