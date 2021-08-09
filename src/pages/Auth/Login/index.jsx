import React from "react";
import LoginForm from "../../../components/LoginForm/index";
import { Container } from "./styles";
import { useAuth } from "../../../context/AuthProvider";

const Login = () => {
  const auth = useAuth();
  const onSubmit = (form) => {
    console.log("form", form);
    auth.login(form);
  };
  return (
    <Container>
      <div className="bar" />
      <div className="inner">
        <LoginForm onSubmit={onSubmit} />
      </div>
    </Container>
  );
};

export default Login;
