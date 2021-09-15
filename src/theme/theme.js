import { textSnippets } from "./textSnippets";
import { cssSnippets } from "./cssSnippets";

const theme = {
  primary1: "#25AED0",
  primary2: "#4EC3E0",
  primary3: "#77D1E7",
  primary4: "#92DAEC",
  primary5: "#EFF9FF",
  secondary: "#292F3D",
  grey1: "#1F2933",
  grey2: "#3E4C59",
  grey3: "#7B8794",
  grey4: "#CDD7E3",
  grey5: "#F0F4F8",
  grey6: "#DCE1E7",
  black: "#000000",
  white: "#FFFFFF",
  success: "#2DCCA7",
  warning: "#F7D070",
  error: "#D64545",
  scrollBarColor: "rgba(0, 0, 0, .2)",
  borderColor: "rgba(0, 0, 0, 0.1)",

  mobileBreakPoint: {
    SP: `380px`,
    M: `420px`,
    L: `560px`,
  },

  // Responsive Breakpoints
  breakPoint: {
    // Phone's portrait mode usually ranges from 360px - 640px
    SM: `640px`,
    MD: `768px`,
    LG: `1024px`,
    XL: `1280px`,
    XXXL: `1600px`,
  },

  ...textSnippets,
  ...cssSnippets,
};

export { theme };
