import React from "react";
import Nav from "../Nav";
import { Container, HeaderBackground } from "./styles";

const Layout = ({ children }) => {
  return (
    <Container>
      <HeaderBackground />
      <div className="layout-content">
        <div className="nav-container">
          <Nav />
        </div>
        <div className="app-content">{children}</div>
      </div>
    </Container>
  );
};

export default Layout;
