import styled from "styled-components";

export const Container = styled.div`
  .risk_card {
    ${(props) => props.theme.card};
  }

  .main_title {
    text-align: center;
  }

  .title {
    text-align: center;
    color: ${(props) => props.theme.grey3};
    ${(props) => props.theme.medium_18};
  }

  .risk_inner {
    margin-top: 34px;
    display: flex;
    justify-content: space-between;
  }

  .title {
    margin-bottom: 24px;
  }

  .item {
    margin-bottom: 24px;
  }

  .MuiCircularProgress-colorPrimary {
    color: ${(props) => {
      if (props.riskPercentage < 50) {
        return props.theme.success;
      } else if (props.riskPercentage > 50 && props.riskPercentage < 90) {
        return props.theme.warning;
      } else return props.theme.error;
    }};
  }
`;
