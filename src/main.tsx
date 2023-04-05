import React from "react";

import ReactDOM from "react-dom/client";
import { AppRoutes } from "routes/index.routes";
import { GlobalStyles } from "styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <AppRoutes />
  </React.StrictMode>
);
