import { api } from "service/server";

import { type IUser } from "global/user.types";

export const User = {
  getUsers: async (): Promise<IUser[]> => {
    return (await api.get("/users")).data;
  },

  getUser: async (id: string): Promise<IUser> => {
    return (await api.get(`/users/${id}`)).data;
  },

  updateUser: async (id: string, data: IUser): Promise<boolean> => {
    return await api.put(`/users/${id}`, data);
  },

  deleteUser: async (id: string): Promise<boolean> => {
    return await api.delete(`/users/${id}`);
  },

  createUser: async (data: IUser): Promise<boolean> => {
    return await api.post("/users", data);
  },
};
