import { api } from "service/server";

import {
  type IAuthLogin,
  type IAuthUser,
  type IForgotPassword,
  type IForgotPasswordResponse,
  type INewAccess,
} from "global/auth.types";
import { type IUser } from "global/user.types";
import { type IDefaultResponse } from "service/server.types";

export const authService = {
  login: async ({
    email,
    password,
  }: IAuthLogin): Promise<IDefaultResponse<IAuthUser>> => {
    const response = await api.post("/authentications/login", {
      email,
      password,
    });

    return response;
  },

  forgotPassword: async (
    email: IForgotPassword
  ): Promise<IDefaultResponse<IForgotPasswordResponse>> => {
    const {
      status,
      data: { data },
    } = await api.post("/authentications/forgot-password", email);

    return {
      status,
      data,
    };
  },

  createAccount: async (user: IUser): Promise<IDefaultResponse<IUser>> => {
    const { status, data } = await api.post("/authentications", user);

    return {
      status,
      data,
    };
  },

  newAccess: async (
    newAccessData: INewAccess
  ): Promise<IDefaultResponse<INewAccess>> => {
    const {
      status,
      data: { data },
    } = await api.post("/authentications/active-account", newAccessData);

    return {
      status,
      data,
    };
  },
};
