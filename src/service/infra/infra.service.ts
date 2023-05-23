import { api } from "service/server";

import { type IInfra } from "global/infra.types";
import { type IDefaultResponse } from "service/server.types";

export const infraService = {
  getInfras: async (): Promise<IDefaultResponse<IInfra[]>> => {
    const { status, data } = await api.get("/infra");
    return {
      status,
      data,
    };
  },

  getInfra: async (id: string): Promise<IDefaultResponse<IInfra>> => {
    const { status, data } = await api.get(`/infra/${id}`);
    return {
      status,
      data,
    };
  },

  updateInfra: async (
    id: string,
    infra: IInfra
  ): Promise<IDefaultResponse<IInfra>> => {
    const { status, data } = await api.put(`/infra/${id}`, infra);
    return {
      status,
      data,
    };
  },

  deleteInfra: async (id: string): Promise<IDefaultResponse<IInfra>> => {
    const { status, data } = await api.delete(`/infra/${id}`);
    return {
      status,
      data,
    };
  },

  createInfra: async (infra: IInfra): Promise<IDefaultResponse<IInfra>> => {
    const { status, data } = await api.post("/infra", infra);
    return {
      status,
      data,
    };
  },
};
