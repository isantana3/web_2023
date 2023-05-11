import { api } from "service/server";

import { type IInfra } from "global/infra.types";

export const Infra = {
  getInfras: async (): Promise<IInfra[]> => {
    return (await api.get("/infra")).data;
  },

  getInfra: async (id: string): Promise<IInfra> => {
    return (await api.get(`/infra/${id}`)).data;
  },

  updateInfra: async (id: string, data: IInfra): Promise<boolean> => {
    return await api.put(`/infra/${id}`, data);
  },

  deleteInfra: async (id: string): Promise<boolean> => {
    return await api.delete(`/infra/${id}`);
  },

  createInfra: async (data: IInfra): Promise<boolean> => {
    return await api.post("/infra", data);
  },
};
