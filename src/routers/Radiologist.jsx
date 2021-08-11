import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "../components/Layout";
import Diagnose from "../pages/Radiologist/Diagnose";

const Radiologist = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/diagnose" component={Diagnose} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Radiologist;
