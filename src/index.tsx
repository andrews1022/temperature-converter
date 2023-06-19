import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";

// components
import App from "./components/App/App";

// styled components
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

const container = document.getElementById("root");

const root = createRoot(container!);

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
