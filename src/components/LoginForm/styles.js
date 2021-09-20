import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 480px;

  .subtitle {
    margin-bottom: 16px;
    color: ${(props) => props.theme.grey3};
  }

  .form form {
    display: flex;
    flex-direction: column;
    padding: 80px;
    align-items: center;
  }

  .form .input {
    margin-bottom: 44px;
    width: 100%;
  }

  .form button {
    width: 100%;
    background-color: ${(props) => props.theme.primary1};
    padding-top: 12px;
    padding-bottom: 12px;
    color: ${(props) => props.theme.white};
  }
`;
