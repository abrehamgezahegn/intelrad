import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  .card_title {
    ${(props) => props.theme.bold_18}
  }
  .card_value {
    ${(props) => props.theme.bold_24}
    color: ${(props) => props.theme.primary1};
  }

  .card {
    ${(props) => props.theme.card};
    max-width: 390px;
    width: 100%;
  }

  .icon {
    margin-left: 32px;
  }

  .row {
    align-items: flex-start;
  }
`;
