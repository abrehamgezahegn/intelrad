import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 480px;
  .form {
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.1);
  }

  .title {
    margin-bottom: 36px;
  }

  .form form {
    display: flex;
    flex-direction: column;
    padding: 80px;
    align-items: center;
    background-color: ${(props) => props.theme.white};
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
