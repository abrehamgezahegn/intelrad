import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 78vh;

  .form-container {
    ${(props) => props.theme.card}
    padding: 80px;
  }

  .form-item {
    margin-bottom: 28px;
    min-width: 500px;
  }
  .input {
    width: 100%;
  }
`;
