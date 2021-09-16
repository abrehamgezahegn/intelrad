import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  .form-container {
    ${(props) => props.theme.card}
    padding: 80px;
    margin-top: 40px;
  }

  .form-item {
    margin-bottom: 28px;
    min-width: 500px;
  }
  .input {
    width: 100%;
  }
`;
