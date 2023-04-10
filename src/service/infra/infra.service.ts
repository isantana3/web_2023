import { api } from "service/server";

import { type IInfra } from "global/infra.types";

export const Infra = {
  getInfras: async (): Promise<IInfra[]> => {
    return (await api.get("/Infra")).data;
  },

  getInfra: async (id: string): Promise<IInfra> => {
    return (await api.get(`/Infra/${id}`)).data;
  },

  updateInfra: async (id: string, data: IInfra): Promise<boolean> => {
    return await api.put(`/Infra/${id}`, data);
  },

  deleteInfra: async (id: string): Promise<boolean> => {
    return await api.delete(`/Infra/${id}`);
  },

  createInfra: async (data: IInfra): Promise<boolean> => {
    return await api.post("/Infra", data);
  },
};
