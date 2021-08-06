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
      <LoginForm onSubmit={onSubmit} />
    </Container>
  );
};

export default Login;
