import { useEffect } from "react";

import { Login } from "pages/Login/Login.page";
import { NotAuthorized } from "pages/NotAuthorized/NotAuthorized.page";
import { NotFound } from "pages/NotFound/NotFound.page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth } from "store/slices/auth/useAuth";

import { RoutesTemplate } from "components/RoutesTemplate";

import { AdminRoutes } from "./admin.routes";
import { UserRoutes } from "./user.routes";

export function AppRoutes(): JSX.Element {
  const { user } = useAuth();

  return (
    <Router>
      {/* Auth Routes */}
      {!user.id ? (
        user.userType === "ADMINISTRADOR" ? (
          <RoutesTemplate>
            <AdminRoutes />
          </RoutesTemplate>
        ) : (
          <RoutesTemplate>
            <UserRoutes />
          </RoutesTemplate>
        )
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      )}
    </Router>
  );
}
