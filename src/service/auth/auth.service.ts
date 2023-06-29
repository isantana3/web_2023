import { api } from "service/server";

import {
  type IAuthLogin,
  type IAuthUser,
  type IForgotPassword,
  type IForgotPasswordResponse,
} from "global/auth.types";
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
};
