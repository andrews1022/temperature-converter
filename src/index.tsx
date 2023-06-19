import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";

// components
import App from "./components/App/App";

// styled components
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

const container = document.getElementById("root");

// using null assertion as per react docs: https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
