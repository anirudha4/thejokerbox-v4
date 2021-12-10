import { AuthContext } from "@contexts/AuthStore";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

export default function withGaurd(Component) {
  return function WrapperComponent({ props }) {
    const { user } = useContext(AuthContext);
    if (!user) {
      return <Navigate to="/" />;
    }
    return <Component {...props} />;
  };
}
