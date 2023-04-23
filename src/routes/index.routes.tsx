import { useEffect } from "react";

import { Login } from "pages/Login/Login.page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth } from "store/slices/auth/useAuth";
import WebFont from "webfontloader";

import { RoutesTemplate } from "components/RoutesTemplate";

import { AdminRoutes } from "./admin.routes";
import { UserRoutes } from "./user.routes";

export function AppRoutes(): JSX.Element {
  const { user } = useAuth();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter, n4, i4, n7, 500", "Montserrat, n4, i4, n7, 500"],
      },
    });
  }, []);

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
