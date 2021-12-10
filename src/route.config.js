import Home from "@pages/Home";
import Dashboard from "@pages/Dashboard";
import routeConstants from "@utils/routeConstants";

export const routeConfig = {
    home: {
        component: Home,
        ...routeConstants.home
    },
    dashboard: {
        component: Dashboard,
        ...routeConstants.dashboard
    }
}