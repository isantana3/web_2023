/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { ForgotPassword } from "pages/ForgotPassword";
import { Login } from "pages/Login/Login.page";
import { Register } from "pages/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { userService } from "service/user/user.service";
import { useAuth } from "store/slices/auth/useAuth";

import { RoutesTemplate } from "components/RoutesTemplate";
import { helpers } from "utils/helpers";

import { AdminRoutes } from "./admin.routes";
import { UserRoutes } from "./user.routes";

export function AppRoutes(): JSX.Element {
  const { user, authenticate } = useAuth();

  useEffect(() => {
    const getUser = async (): Promise<void> => {
      const { data } = await userService.getUser("64623504921a64b1f6991cd1");
      console.log(data);
      data.token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYyMzUwNDkyMWE2NGIxZjY5OTFjZDEiLCJuYW1lIjoiUm9iZXJ0byBDYXJsb3MiLCJlbWFpbCI6InJvYmVydG8yQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDU2NzgiLCJyZWdpc3RyYXRpb24iOiIyMDIwMjAxNTQ1Iiwib2ZmaWNlIjoicHJvZmVzc29yIiwicm9sZSI6ImFkbWluIn0.bOR3z4xVkflHGonUQ6R-8g-saEPf1_op9oGD1yAfh88";
      authenticate({ user: data });
    };

    getUser().catch((e) => {
      console.log(e);
    });
  }, []);

  const isUserValid = helpers.validToken();

  return (
    <Router>
      {/* Auth Routes */}
      {!isUserValid ? (
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
        </Routes>
      )}
    </Router>
  );
}
