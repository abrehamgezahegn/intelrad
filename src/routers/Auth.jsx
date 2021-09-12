import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "../pages/Auth/Login";

const AuthRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

export default AuthRouter;
