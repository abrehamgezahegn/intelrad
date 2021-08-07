import React from "react";
import Nav from "../Nav";
import { Container } from "./styles";

const Layout = ({ children }) => {
  return (
    <Container>
      <Nav />
      {children}
    </Container>
  );
};

export default Layout;
