import React from "react";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { AppRoutes } from "routes/index.routes";
import store from "store/store";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/GlobalStyles";
import { Theme } from "styles/Themes";

import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Provider store={store}>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          pauseOnHover
          bodyClassName="toastBody"
          theme="light"
        />
        <GlobalStyles />
        <AppRoutes />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
