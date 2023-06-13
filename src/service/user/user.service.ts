import { api } from "service/server";

import { type IUser } from "global/user.types";
import {
  type IDefaultPaginated,
  type IDefaultResponse,
  type IDefaultResponsePaginated,
} from "service/server.types";

export const userService = {
  getUsers: async ({
    page = 1,
    limit = 10,
  }: IDefaultPaginated): Promise<IDefaultResponsePaginated<IUser[]>> => {
    const {
      status,
      data: { data },
    } = await api.get("/users", {
      params: { page, limit },
    });
    return {
      status,
      data,
    };
  },

  getUser: async (id: string): Promise<IDefaultResponse<IUser>> => {
    const { status, data } = await api.get(`/users/${id}`);
    return {
      status,
      data,
    };
  },

  updateUser: async (
    id: string,
    user: Omit<IUser, "_id" & "password">
  ): Promise<IDefaultResponse<IUser>> => {
    const {
      status,
      data: { data },
    } = await api.patch(`/users/${id}`, user);
    return {
      status,
      data,
    };
  },

  deleteUser: async (id: string): Promise<IDefaultResponse<IUser>> => {
    const {
      status,
      data: { data },
    } = await api.delete(`/users/${id}`);
    return {
      status,
      data,
    };
  },

  createUser: async (
    user: Omit<IUser, "_id">
  ): Promise<IDefaultResponse<IUser>> => {
    const {
      status,
      data: { data },
    } = await api.post("/users", user);
    return {
      status,
      data,
    };
  },
};
