import { css } from "styled-components";

const cssSnippets = {
  pulseAnimation: css`
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  `,
  stickyView: css`
    height: 100vh;
    position: sticky;
    top: 0px;
  `,
  truncate: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  card: css`
    background-color: ${(props) => props.theme.white};
    box-shadow: 0 35px 25px -60px rgba(0, 0, 0, 0.2);
    padding: 44px;
    border-radius: 24px;
    width: 100%;
  `,

  button: css`
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.white};
    padding: 18px;
    ${(props) => props.theme.medium_18};
  `,

  scrollBar: (bg, fg, width = 8) => css`
    scrollbar-color: ${bg} ${fg};
    scrollbar-width: thin;
    transition: all 0.25s ease-out;

    &::-webkit-scrollbar {
      width: ${width}px;
      border-radius: 2px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 2px;
      background-color: ${fg};
      transition: all 0.25s ease-out;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background-color: ${bg};
      transition: all 0.25s ease-out;
    }
  `,
};

export { cssSnippets };
