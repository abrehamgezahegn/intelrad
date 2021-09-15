import styled from "styled-components";

export const Container = styled.div`
  .card {
    ${(props) => props.theme.card}
    width: auto;
    max-width: 840px;
  }

  .full {
    max-width: none;
  }

  .recharts-legend-wrapper {
    bottom: -20px !important;
  }

  .recharts-legend-item {
    margin-right: 24px !important;
  }
`;
