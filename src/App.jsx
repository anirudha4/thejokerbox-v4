import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import For from "@components/common/For"
import { routeConfig } from "./route.config"
import Navbar from '@components/common/Navbar';
import 'antd/dist/antd.css';
import { useContext } from 'react';
import { AuthContext } from '@contexts/AuthStore';

function App() {
  const { user, logout } = useContext(AuthContext);
  return ( 
    <BrowserRouter>
      <Navbar user={user} logout={logout} />
      <For 
        Parent={props => <Routes {...props} />}
        items={Object.keys(routeConfig)}
        renderItem={(routeKey, index) => {
          const Component = routeConfig[routeKey].component;
          return (
            <Route 
              path={routeConfig[routeKey].route}
              exact={routeConfig[routeKey].exact}
              key={index}
              element={<Component />}
            />
          )
        }}
      />
    </BrowserRouter>
  )
}

export default App
