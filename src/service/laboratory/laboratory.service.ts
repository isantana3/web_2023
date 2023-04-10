import { api } from "service/server";

import { type ILaboratory } from "global/laboratory.types";

export const Laboratory = {
  getLaboratorys: async (): Promise<ILaboratory[]> => {
    return (await api.get("/Laboratory")).data;
  },

  getLaboratory: async (id: string): Promise<ILaboratory> => {
    return (await api.get(`/Laboratory/${id}`)).data;
  },

  updateLaboratory: async (id: string, data: ILaboratory): Promise<boolean> => {
    return await api.put(`/Laboratory/${id}`, data);
  },

  deleteLaboratory: async (id: string): Promise<boolean> => {
    return await api.delete(`/Laboratory/${id}`);
  },

  createLaboratory: async (data: ILaboratory): Promise<boolean> => {
    return await api.post("/Laboratory", data);
  },
};
