import React from "react";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { AppRoutes } from "routes/index.routes";
import store from "store/store";
import { GlobalStyles } from "styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <AppRoutes />
    </Provider>
  </React.StrictMode>
);
