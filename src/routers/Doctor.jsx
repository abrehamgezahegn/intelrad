import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "../components/Layout";
import RequestImaging from "../pages/Doctor/RequestImaging";
import Diagnose from "../pages/Shared/Diagnose";
import Records from "../pages/Shared/Records";

const Doctor = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Records} />
          <Route exact path="/request" component={RequestImaging} />
          <Route
            path="/diagnose/:patientId/:diagnosisId"
            component={Diagnose}
          />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Doctor;
