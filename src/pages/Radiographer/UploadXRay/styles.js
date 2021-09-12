import styled from "styled-components";

export const Container = styled.div`
  .data-card {
    ${(props) => props.theme.card}
    width: 400px;
  }

  .progress-container {
    ${(props) => props.theme.card}
    padding: 8px;
    border-radius: 4px;
  }

  .submit-button {
    width: 100%;
  }
`;
