import React from "react";
import AuthRouter from "./Auth";
import Radiologist from "./Radiologist";
import { useAuth } from "../context/AuthProvider";
import Doctor from "./Doctor";
import Radiographer from "./Radiographer";

const IndexRoute = () => {
  const {
    user: { role },
  } = useAuth();

  const renderAppBasedOnRole = () => {
    switch (role) {
      case "doctor":
        return <Doctor />;
      case "radiographer":
        return <Radiographer />;
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
