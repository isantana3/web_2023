import { Login } from "pages/Login/Login.page";
import { NotAuthorized } from "pages/NotAuthorized/NotAuthorized.page";
import { NotFound } from "pages/NotFound/NotFound.page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AdminRoutes } from "./admin.routes";
import { UserRoutes } from "./user.routes";

export function AppRoutes(): JSX.Element {
  const [admin, authenticated] = [false, true];
  return (
    <Router>
      <Routes>
        {authenticated ? (
          admin ? (
            <AdminRoutes />
          ) : (
            <UserRoutes />
          )
        ) : (
          <Route path="/" element={<Login />} />
        )}
        <Route path="*" element={<NotFound />} />
        {!authenticated && <Route path="/" element={<NotAuthorized />} />}
      </Routes>
    </Router>
  );
}
