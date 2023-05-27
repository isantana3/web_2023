import { api } from "service/server";

import { type ILaboratory } from "global/laboratory.types";
import { type IDefaultResponse } from "service/server.types";

export const laboratoryService = {
  getLaboratories: async (): Promise<IDefaultResponse<ILaboratory[]>> => {
    const { status, data } = await api.get("/laboratory");
    return {
      status,
      data,
    };
  },

  getLaboratory: async (id: string): Promise<IDefaultResponse<ILaboratory>> => {
    const { status, data } = await api.get(`/laboratory/${id}`);
    return {
      status,
      data,
    };
  },

  updateLaboratory: async (
    id: string,
    lab: ILaboratory
  ): Promise<IDefaultResponse<ILaboratory>> => {
    const { status, data } = await api.put(`/laboratory/${id}`, lab);
    return {
      status,
      data,
    };
  },

  deleteLaboratory: async (
    id: string
  ): Promise<IDefaultResponse<ILaboratory>> => {
    const { status, data } = await api.delete(`/laboratory/${id}`);
    return {
      status,
      data,
    };
  },

  createLaboratory: async (
    lab: ILaboratory
  ): Promise<IDefaultResponse<ILaboratory>> => {
    const { status, data } = await api.post("/laboratory", lab);
    return {
      status,
      data,
    };
  },
};
