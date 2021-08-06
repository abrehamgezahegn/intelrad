import styled from "styled-components";

export const Container = styled.div`
  .risk_card {
    ${(props) => props.theme.card};
  }

  .title {
    text-align: center;
  }

  .risk_inner {
    margin-top: 34px;
    display: flex;
    justify-content: space-between;
  }

  .title {
    margin-bottom: 44px;
  }

  .item {
    margin-bottom: 24px;
  }
`;
