import { api } from "service/server";

import { type IUser } from "global/user.types";
import { type IDefaultResponse } from "service/server.types";

export const userService = {
  getUsers: async (): Promise<IDefaultResponse<IUser[]>> => {
    return await api.get("/users");
  },

  getUser: async (id: string): Promise<IDefaultResponse<IUser>> => {
    return await api.get(`/users/${id}`);
  },

  updateUser: async (
    id: string,
    data: Omit<IUser, "_id" & "password">
  ): Promise<IDefaultResponse<IUser>> => {
    return await api.patch(`/users/${id}`, data);
  },

  deleteUser: async (id: string): Promise<IDefaultResponse<IUser>> => {
    return await api.delete(`/users/${id}`);
  },

  createUser: async (
    data: Omit<IUser, "_id">
  ): Promise<IDefaultResponse<IUser>> => {
    return await api.post("/users", data);
  },
};
