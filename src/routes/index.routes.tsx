/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { ForgotPassword } from "pages/ForgotPassword";
import { Login } from "pages/Login/Login.page";
import { NewAccess } from "pages/NewAccess";
import { Register } from "pages/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth } from "store/slices/auth/useAuth";

import { RoutesTemplate } from "components/RoutesTemplate";
import { helpers } from "utils/helpers";

import { AdminRoutes } from "./admin.routes";
import { UserRoutes } from "./user.routes";

export function AppRoutes(): JSX.Element {
  const { user, authenticate } = useAuth();

  const isUserValid = helpers.validToken();

  useEffect(() => {
    if (!isUserValid) {
      localStorage.setItem("token", "");
    } else {
      authenticate({ user: isUserValid });
    }
    console.log(localStorage.getItem("token"));
  }, []);

  return (
    <Router>
      {/* Auth Routes */}
      {isUserValid ? (
        user.role === "admin" ? (
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
          <Route path="/cadastro" element={<Register />} />
          <Route path="/recuperar-senha" element={<ForgotPassword />} />
          <Route path="/novo-acesso" element={<NewAccess />} />
        </Routes>
      )}
    </Router>
  );
}
