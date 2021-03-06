import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "../components/Layout";
import UploadXRay from "../pages/Radiographer/UploadXRay";
import Requests from "../pages/Shared/Requests";
import Diagnose from "../pages/Shared/Diagnose";
import Records from "../pages/Shared/Records";

const Radiographer = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Requests} />
          <Route
            exact
            path="/upload-x-ray/:patientId/:diagnosisId"
            component={UploadXRay}
          />
          <Route exact path="/history" component={Records} />
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

export default Radiographer;
