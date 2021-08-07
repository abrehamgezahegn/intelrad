import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 24px;
  .inner {
    width: 100%;
    max-width: ${(props) => props.theme.breakPoint.XXXL};
    margin-top: 60px;
    /* display: flex; */
    /* justify-content: space-between; */
  }

  .card_container {
    display: flex;
    margin-bottom: 80px;
  }

  .card_item {
    margin-right: 44px;
    width: 100%;
  }

  .d_header {
    width: 100%;
    justify-content: space-between;
  }
  .button {
    ${(props) => props.theme.button}
    padding: 12px;
  }

  .button:hover {
    background-color: ${(props) => props.theme.secondary};
  }
`;
