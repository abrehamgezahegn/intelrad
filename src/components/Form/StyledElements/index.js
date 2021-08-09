import styled, { css } from "styled-components";

export const baseInput = css`
  padding: 7px 32px 7px 12px;
  border-radius: 8px;
  width: 100%;
  color: ${(props) => props.theme.grey1};
  ${(props) => props.theme.medium_14};
  ${(props) => {
    if (props.error)
      return css`
        border: solid ${props.theme.error} 1px;
      `;
    else
      return css`
        border: solid ${props.theme.grey6} 1px;
        &:focus {
          border: solid ${(props) => props.theme.primary1} 1px;
        }
      `;
  }}
  outline: none;
  -webkit-appearance: none;
`;

export const StyledTextArea = styled.textarea`
  ${baseInput}
  resize: none;
`;

export const StyledLabel = styled.label`
  ${(props) => props.theme.medium_14};
  color: ${(props) => props.theme.secondary};
  margin-bottom: 7px;
  display: inline-block;
`;
