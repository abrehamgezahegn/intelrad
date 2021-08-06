import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: "Proxima Nova Medium", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    scroll-behavior: smooth;
    user-select: none;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    font-family: "Proxima Nova Medium", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    outline: 0;
  }

  body {
    margin: 0px;
    padding: 0px;
    font-family: "Proxima Nova Medium", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: ${theme.grey2};
    background-color: ${theme.grey5};
  }


 body::-webkit-scrollbar {
    width: 8px;
    opacity: 0;
  }

  /* Track */
  body::-webkit-scrollbar-track {
    opacity: 0;
    width: 8px;
  }

  /* Handle */
  body::-webkit-scrollbar-thumb { 
    background-color: ${({ theme }) => theme.scrollBarColor}; 
    opacity: 0.6; 
    border-radius: 2px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0px;
    line-height: 18px;
    font-family: "Roboto"
  }

  a {
    text-decoration: none;
    color: #575a67;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
  }

  .row {
    display:flex;
    align-items:center;
  }

  .link {
    color: ${theme.primary1};
    cursor: pointer;
  }

  .link:hover {
    text-decoration: underline;
  }

    /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  .tippy-box {
    background-color: ${theme.white};
    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.15));
  }

.tippy-box .tippy-content {
  padding: 20px;
}

  .tippy-box .tippy-arrow {
    color: ${theme.white};
  }

  img {
   object-fit: cover;
  }



`;
