import React from "react";
import AuthRouter from "./Auth";
import Radiologist from "./Radiologist";
import { useAuth } from "../context/AuthProvider";

const IndexRoute = () => {
  const {
    user: { role },
  } = useAuth();

  const renderAppBasedOnRole = () => {
    switch (role) {
      case "doctor":
        return <h1>doctor</h1>;
      case "radiographer":
        return <h1>radiographer</h1>;
      case "radiologist":
        return <Radiologist />;
      case "admin":
        return <h1>admin</h1>;
      case "super-admin":
        return <h1>super admin</h1>;
      default:
        return <AuthRouter />;
    }
  };

  return renderAppBasedOnRole();
};

export default IndexRoute;
