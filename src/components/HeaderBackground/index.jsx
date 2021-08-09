import styled from "styled-components";

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
