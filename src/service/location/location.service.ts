import { api } from "service/server";

import { type ILocation } from "global/location.types";
import { type IDefaultResponse } from "service/server.types";

export const locationService = {
  getLocations: async (): Promise<IDefaultResponse<ILocation[]>> => {
    const { status, data } = await api.get("/pavilions");
    return {
      status,
      data,
    };
  },

  getLocation: async (id: string): Promise<IDefaultResponse<ILocation>> => {
    const { status, data } = await api.get(`/pavilions/${id}`);
    return {
      status,
      data,
    };
  },

  updateLocation: async (
    id: string,
    lab: Omit<ILocation, "_id">
  ): Promise<IDefaultResponse<ILocation>> => {
    const { status, data } = await api.patch(`/pavilions/${id}`, lab);
    return {
      status,
      data,
    };
  },

  deleteLocation: async (id: string): Promise<IDefaultResponse<ILocation>> => {
    const { status, data } = await api.delete(`/pavilions/${id}`);
    return {
      status,
      data,
    };
  },

  createLocation: async (
    lab: Omit<ILocation, "_id">
  ): Promise<IDefaultResponse<ILocation>> => {
    const { status, data } = await api.post("/pavilions", lab);
    return {
      status,
      data,
    };
  },
};
