import styled from "styled-components";

export const Container = styled.div`
  .patient_card {
    ${(props) => props.theme.card};
  }

  .title {
    text-align: center;
    margin-bottom: 44px;
  }

  .item {
    margin-bottom: 24px;
  }

  .item span {
    opacity: 0.6;
  }
`;
