import styled from "styled-components";

export const BasicContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 24px;
  .inner {
    width: 100%;
    max-width: ${(props) => props.theme.breakPoint.XXXL};
    margin-top: 60px;
  }
`;
