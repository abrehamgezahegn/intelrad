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
    text-transform: capitalize;
    word-break: break-all;
  }

  .item span {
    opacity: 0.6;
  }

  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50px;
    margin-bottom: 24px;
  }
`;
