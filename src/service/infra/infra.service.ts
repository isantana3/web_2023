import { api } from "service/server";

import { type IInfra } from "global/infra.types";
import {
  type IDefaultPaginated,
  type IDefaultResponse,
} from "service/server.types";

export const infraService = {
  getInfras: async ({
    page = 1,
    limit = 10,
  }: IDefaultPaginated): Promise<IDefaultResponse<IInfra[]>> => {
    const {
      status,
      data: { data },
    } = await api.get("/items", {
      params: { page, limit },
    });
    return {
      status,
      data,
    };
  },

  getInfra: async (id: string): Promise<IDefaultResponse<IInfra>> => {
    const {
      status,
      data: { data },
    } = await api.get(`/items/${id}`);
    return {
      status,
      data,
    };
  },

  updateInfra: async (
    id: string,
    infra: Omit<IInfra, "_id">
  ): Promise<IDefaultResponse<IInfra>> => {
    const {
      status,
      data: { data },
    } = await api.patch(`/items/${id}`, infra);
    return {
      status,
      data,
    };
  },

  deleteInfra: async (id: string): Promise<IDefaultResponse<IInfra>> => {
    const {
      status,
      data: { data },
    } = await api.delete(`/items/${id}`);
    return {
      status,
      data,
    };
  },

  createInfra: async (
    infra: Omit<IInfra, "_id">
  ): Promise<IDefaultResponse<IInfra>> => {
    const {
      status,
      data: { data },
    } = await api.post("/items", infra);
    return {
      status,
      data,
    };
  },
};
