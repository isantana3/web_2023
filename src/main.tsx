import React from "react";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { AppRoutes } from "routes/index.routes";
import store from "store/store";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/GlobalStyles";
import { Theme } from "styles/Themes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Provider store={store}>
        <GlobalStyles />
        <AppRoutes />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
