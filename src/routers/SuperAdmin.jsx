import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../pages/SuperAdmin/Dashboard";

const SuperAdmin = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default SuperAdmin;
