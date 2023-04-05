import { api } from "service/server";

export interface IUser { }

export const User = {
  getUsers: async (): Promise<IUser[]> => {
    return (await api.get("/User")).data;
  },

  getUser: async (id: string): Promise<IUser> => {
    return (await api.get(`/User/${id}`)).data;
  },

  updateUser: async (id: string, data: IUser): Promise<boolean> => {
    return await api.put(`/User/${id}`, data);
  },

  deleteUser: async (id: string): Promise<boolean> => {
    return await api.delete(`/User/${id}`);
  },

  createUser: async (data: IUser): Promise<boolean> => {
    return await api.post("/User", data);
  },
};
