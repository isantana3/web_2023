/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { Login } from "pages/Login/Login.page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { userService } from "service/user/user.service";
import { useAuth } from "store/slices/auth/useAuth";

import { RoutesTemplate } from "components/RoutesTemplate";
import { helpers } from "utils/helpers";

import { AdminRoutes } from "./admin.routes";
import { UserRoutes } from "./user.routes";

export function AppRoutes(): JSX.Element {
  const { user, authenticate } = useAuth();
  const isUserValid = helpers.validToken();

  useEffect(() => {
    const getUser = async (): Promise<void> => {
      const { data } = await userService.getUser("64623504921a64b1f6991cd1");
      authenticate({ user: data });
    };

    getUser().catch((e) => {
      console.log(e);
    });
  }, []);

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
        </Routes>
      )}
    </Router>
  );
}
