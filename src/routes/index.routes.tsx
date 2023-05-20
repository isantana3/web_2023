/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { Login } from "pages/Login/Login.page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { User } from "service/user/user.service";
import { useAuth } from "store/slices/auth/useAuth";

import { RoutesTemplate } from "components/RoutesTemplate";

import { AdminRoutes } from "./admin.routes";
import { UserRoutes } from "./user.routes";

export function AppRoutes(): JSX.Element {
  const { user, authenticate } = useAuth();

  useEffect(() => {
    const getUser = async (): Promise<void> => {
      const res = await User.getUser("1");
      authenticate({ user: res });
    };

    getUser().catch((e) => {
      console.log(e);
    });
  }, []);

  return (
    <Router>
      {/* Auth Routes */}
      {user.id ? (
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
