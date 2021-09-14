import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "../components/Layout";
import Diagnose from "../pages/Shared/Diagnose";
import Requests from "../pages/Shared/Requests";

const Radiologist = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Requests} />
          <Route
            exact
            path="/diagnose/:patientId/:diagnosisId"
            component={Diagnose}
          />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Radiologist;
