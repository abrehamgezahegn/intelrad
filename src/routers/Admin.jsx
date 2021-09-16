import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "../components/Layout";
import CreateUser from "../pages/Admin/CreateUser";

const Admin = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={CreateUser} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Admin;
