import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 12px;
  .error-message {
    color: ${(props) => props.theme.error};
    ${(props) => props.theme.medium_14};
  }
`;

const FormErrorMessage = ({ errors, name, className = "" }) => {
  if (!errors) return null;
  if (errors[name]) {
    return (
      <Container className={className}>
        <p className={`error-message ${className}`}>{errors[name].message}</p>
      </Container>
    );
  } else {
    return null;
  }
};

export default FormErrorMessage;
