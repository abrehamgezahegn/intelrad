import styled from "styled-components";

export const Container = styled.div`
  .bar {
    width: 100%;
    height: 20px;
    background-color: ${(props) => props.theme.primary1};
  }

  .logo {
    margin-bottom: 42px;
    ${(props) => props.theme.bold_24}
  }

  .inner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  }
`;
