import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "../components/Layout";
import Records from "../pages/Shared/Records";

const Doctor = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={Records} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Doctor;
