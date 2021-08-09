import React from "react";
import Spinner from "../Spinner";
import styled, { css } from "styled-components";

const baseButton = css`
  outline: none;
  border: none;
  border-radius: 10px;
  background: ${(props) => props.theme.primary1};
  padding: 7px 6px;
  color: ${(props) => props.theme.white};
  ${(props) => props.theme.bold_16};
  cursor: pointer;
  height: 36px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  transition: 0.175s ease all;
  &:disabled {
    cursor: not-allowed;
  }

  &:hover,
  &:focus {
    transform: scale(1.025);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.05);
  }
`;

const StyledButton = styled.button`
  ${baseButton};
`;

const StyledLightButton = styled.button`
  ${baseButton}
  background: none;
  color: ${(props) => props.theme.grey3};
  &:hover {
    box-shadow: none;
  }
`;

const StyledGreyButton = styled.button`
  ${baseButton}
  background: ${(props) => props.theme.grey4};
  color: ${(props) => props.theme.grey1};
`;

const StyledDarkButton = styled.button`
  ${baseButton}
  background: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.white};
`;

const StyledOutlinedButton = styled.button`
  ${baseButton};
  background: ${(props) => props.theme.white};
  color: ${(props) => {
    if (props.color === "green") return props.theme.success;
    if (props.color === "yellow") return props.theme.warning;
    return props.theme.grey3;
  }};
  border: 2px solid
    ${(props) => {
      if (props.color === "green") return props.theme.success;
      if (props.color === "yellow") return props.theme.warning;
      return props.theme.grey3;
    }};
`;

export const Button = ({ children, loading, ...buttonProps }) => {
  return (
    <StyledButton {...buttonProps} disabled={loading}>
      {loading ? <Spinner size="S" /> : children}
    </StyledButton>
  );
};

export const ButtonLight = ({ children, loading, ...buttonProps }) => {
  return (
    <StyledLightButton disabled={loading} {...buttonProps}>
      {loading ? <Spinner color="dark" size="S" /> : children}
    </StyledLightButton>
  );
};

export const ButtonGrey = ({ children, loading, ...buttonProps }) => {
  return (
    <StyledGreyButton disabled={loading} {...buttonProps}>
      {loading ? <Spinner color="dark" size="S" /> : children}
    </StyledGreyButton>
  );
};

export const ButtonDark = ({
  children,
  loading,

  ...buttonProps
}) => {
  return (
    <StyledDarkButton disabled={loading} {...buttonProps} type="submit">
      {loading ? <Spinner color="light" size="S" /> : children}
    </StyledDarkButton>
  );
};

export const ButtonOutlined = ({ children, loading, ...buttonProps }) => {
  return (
    <StyledOutlinedButton disabled={loading} {...buttonProps}>
      {loading ? <Spinner color="dark" size="S" /> : children}
    </StyledOutlinedButton>
  );
};
