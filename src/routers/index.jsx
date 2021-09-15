import React from "react";
import AuthRouter from "./Auth";
import Radiologist from "./Radiologist";
import { useAuth } from "../context/AuthProvider";
import Doctor from "./Doctor";
import Radiographer from "./Radiographer";
import SuperAdmin from "./SuperAdmin";

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
      case "superAdmin":
        return <SuperAdmin />;
      default:
        return <AuthRouter />;
    }
  };

  return renderAppBasedOnRole();
};

export default IndexRoute;
