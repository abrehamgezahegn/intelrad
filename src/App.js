import React from "react";
import AuthProvider from "./context/AuthProvider";
import IndexRoute from "./routers";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { GlobalStyles } from "./theme/globalStyles";
// import ApolloClientProvider from "./context/ApolloProvider/ApolloProvider";

function App() {
  return (
    // <ApolloClientProvider>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <IndexRoute />
        <GlobalStyles />
      </AuthProvider>
    </ThemeProvider>
    // </ApolloClientProvider>
  );
}

export default App;
