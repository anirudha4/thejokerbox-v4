import Home from "@pages/Home";
import routeConstants from "@utils/routeConstants";
import About from "@pages/About";

export const routeConfig = {
    home: {
        component: Home,
        ...routeConstants.home
    },
    about: {
        component: About,
        ...routeConstants.about
    }
}