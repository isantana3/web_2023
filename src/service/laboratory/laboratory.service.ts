import { api } from "service/server";

import { type ILaboratory } from "global/laboratory.types";
import { type IDefaultResponse } from "service/server.types";

export const laboratoryService = {
  getLaboratories: async (): Promise<IDefaultResponse<ILaboratory[]>> => {
    const { status, data } = await api.get("/rooms");
    return {
      status,
      data,
    };
  },

  getLaboratory: async (id: string): Promise<IDefaultResponse<ILaboratory>> => {
    const { status, data } = await api.get(`/rooms/${id}`);
    return {
      status,
      data,
    };
  },

  updateLaboratory: async (
    id: string,
    lab: Omit<ILaboratory, "_id">
  ): Promise<IDefaultResponse<ILaboratory>> => {
    const { status, data } = await api.patch(`/rooms/${id}`, lab);
    return {
      status,
      data,
    };
  },

  deleteLaboratory: async (
    id: string
  ): Promise<IDefaultResponse<ILaboratory>> => {
    const { status, data } = await api.delete(`/rooms/${id}`);
    return {
      status,
      data,
    };
  },

  createLaboratory: async (
    lab: Omit<ILaboratory, "_id">
  ): Promise<IDefaultResponse<ILaboratory>> => {
    const { status, data } = await api.post("/rooms", lab);
    return {
      status,
      data,
    };
  },
};
