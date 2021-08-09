import styled, { css } from "styled-components";
import { baseInput } from "../StyledElements";

export const Container = styled.div`
  width: 100%;
  .html-select {
    display: none;
  }
  .custom-select-wrapper {
    position: relative;
    user-select: none;
    width: 100%;
  }
  .custom-select {
    ${baseInput}
    padding: 12px;
    padding-right: 8px;
    background: ${(props) => props.theme.white};
    position: relative;
    cursor: pointer;
    color: ${(props) => props.theme.grey3};

    ${({ secondaryStyle, theme }) =>
      secondaryStyle
        ? css`
            border: none;
            padding: 0;
            ${theme.bold_16}
            color: ${theme.grey1};
          `
        : null}
  }
  .custom-select__trigger {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    ${({ secondaryStyle, theme }) =>
      secondaryStyle
        ? css`
            justify-content: unset;
            span {
              ${theme.truncate}
            }
          `
        : null}
  }
  .custom-options {
    position: absolute;
    max-height: 180px;

    display: none;
    top: 100%;
    left: 0;
    right: 0;
    background: ${(props) => props.theme.white};
    transition: all 0.5s;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    z-index: 2;
    padding: 8px;
    overflow-y: auto;

    ${({ secondaryStyle, theme }) =>
      secondaryStyle
        ? css`
            width: 200px;
            margin-left: -16px;
            @media (max-width: ${theme.breakPoint.MD}) {
              left: unset;
              right: unset;
              margin-left: unset;
            }
          `
        : null}
  }

  .custom-options::-webkit-scrollbar {
    width: 8px;
    opacity: 0;
  }

  /* Track */
  .custom-options::-webkit-scrollbar-track {
    opacity: 0;
    width: 8px;
  }

  /* Handle */
  .custom-options::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollBarColor};
    opacity: 0.6;
    border-radius: 2px;
  }

  .custom-select.open .custom-options {
    opacity: 1;
    z-index: 200;
    display: block;
    visibility: visible;
    pointer-events: all;
    margin-top: 8px;
    box-shadow: -1px 1px 2px rgba(67, 70, 74, 0.0001),
      -2px 2px 5px rgba(67, 86, 100, 0.123689);
    border-radius: 8px;
  }
  .custom-option {
    position: relative;
    display: block;
    padding: 5px 8px;
    cursor: pointer;
    transition: all 0.5s;
    border-radius: 6px;
    color: ${(props) => props.theme.grey3};
    ${(props) => props.theme.medium_14};
    margin-bottom: 12px;
    height: 32px;
  }

  .option-container {
    border: solid white 0.1px;
  }

  .option-container:hover {
    .custom-option {
      cursor: pointer;
      background-color: ${(props) => props.theme.primary5};
    }
  }

  .disabled {
    opacity: 0.5;
  }

  .disabled:hover .custom-option {
    cursor: default;
    background-color: ${(props) => props.theme.white};
  }

  .custom-option.selected {
    color: ${(props) => props.theme.grey3};
    background-color: ${(props) => props.theme.primary5};
  }

  .arrow {
    position: relative;
    height: 7.72px;
    width: 12.26px;
    margin-left: 12px;

    ${({ secondaryStyle }) =>
      secondaryStyle
        ? css`
            margin-left: 10px;
          `
        : null}
  }
  .arrow::before,
  .arrow::after {
    content: "";
    position: absolute;
    bottom: 0px;
    width: 0.15rem;
    height: 100%;
    transition: all 0.5s;
  }
  .arrow::before {
    left: -2px;
    transform: rotate(-45deg);
    background-color: ${(props) => props.theme.grey3};
  }
  .arrow::after {
    left: 2px;
    transform: rotate(45deg);
    background-color: ${(props) => props.theme.grey3};
  }
  .open .arrow::before {
    left: -2px;
    transform: rotate(45deg);
  }
  .open .arrow::after {
    left: 2px;
    transform: rotate(-45deg);
  }

  .selected-display {
    color: ${(props) => props.theme.secondary};
  }
`;
