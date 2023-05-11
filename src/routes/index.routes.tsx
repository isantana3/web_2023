import { useEffect, useState } from "react";

import { Login } from "pages/Login/Login.page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { User } from "service/user/user.service";
import { useAuth } from "store/slices/auth/useAuth";
import WebFont from "webfontloader";

import { RoutesTemplate } from "components/RoutesTemplate";

import { AdminRoutes } from "./admin.routes";
import { UserRoutes } from "./user.routes";

import { type IUser } from "global/user.types";
import { type IUseAuthUser } from "store/slices/auth/authSlice.types";

export function AppRoutes(): JSX.Element {
  const { user, authenticate } = useAuth();

  useEffect(() => {
    const getUser = async (): Promise<void> => {
      const res = await User.getUser("1");
      authenticate({ user: res });
    };

    WebFont.load({
      google: {
        families: ["Inter, n4, i4, n7, 500", "Montserrat, n4, i4, n7, 500"],
      },
    });

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
