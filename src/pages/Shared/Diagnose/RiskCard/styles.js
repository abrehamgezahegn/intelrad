import styled from "styled-components";

export const Container = styled.div`
  .risk_card {
    ${(props) => props.theme.card};
    min-width: 340px;
    padding: 0px;
  }

  .risk_inner {
    padding: 24px;
    padding-top: 0px;
  }

  .header {
    background-color: ${(props) => props.theme.primary1};
    color: ${(props) => props.theme.white};
    padding: 12px;
    padding-bottom: 16px;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
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
