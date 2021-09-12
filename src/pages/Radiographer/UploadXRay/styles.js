import styled from "styled-components";

export const Container = styled.div`
  .data-card {
    ${(props) => props.theme.card}
    width: 400px;
  }
`;
