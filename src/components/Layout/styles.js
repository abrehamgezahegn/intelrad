import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 100px;

  .nav-container {
    padding: 36px 64px;
  }

  .app-content {
    margin: auto;
    margin-top: -40px;
    margin-bottom: 24px;
  }

  @media (max-width: 800px) {
    .app-content {
    }

    .nav-container {
      padding: 24px 34px;
    }
  }
`;

export const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  background-color: ${({ theme }) => theme.secondary};
  width: 100%;
  height: 453px;
  clip-path: polygon(0% 0%, 0% 100%, 100% 58%, 100% 0%);
  transition: height 0.5s ease-out;

  @media (min-width: 640px) {
    height: 366px;
  }
`;
