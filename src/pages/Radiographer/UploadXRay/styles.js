import styled from "styled-components";

export const Container = styled.div`
  .data-card {
    ${(props) => props.theme.card}
    width: 400px;
    padding: 0px;
    padding-bottom: 28px;
  }

  .header {
    padding: 12px;
    background-color: ${(props) => props.theme.primary1};
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    color: ${(props) => props.theme.white};
    margin-bottom: 24px;
  }

  .upload-button {
    width: 100%;
  }

  .progress-container {
    ${(props) => props.theme.card}
    padding: 8px;
    border-radius: 4px;
  }

  .submit-button {
    width: 100%;
  }

  .x-ray-image {
    width: 400px;
    height: 400px;
  }
`;
