import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Radiographer/Home";
import UploadXRay from "../pages/Radiographer/UploadXRay";

const Radiographer = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/upload-x-ray/:requestId" component={UploadXRay} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Radiographer;
