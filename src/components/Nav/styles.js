import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.white};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  .logo {
    display: flex;
    align-items: center;
  }
  .logo a {
    color: ${(props) => props.theme.white};
  }

  .inner {
    width: 100%;
    max-width: ${(props) => props.theme.breakPoint.XXXL};
    display: flex;
    justify-content: space-between;
    margin: 20px;
  }
  .nav-items a {
    color: ${(props) => props.theme.gray2};
    /* opacity: 0.8; */
    /* color: ${(props) => props.theme.white}; */
  }

  .nav_item__active {
    color: ${(props) => props.theme.white};
    opacity: 1;
  }

  .menu-trigger {
    color: ${(props) => props.theme.white};
  }

  .nav-item {
    margin-right: 12px;
    margin-left: 12px;
    margin-bottom: 0px;
    ${(props) => props.theme.medium_18};
  }
`;
