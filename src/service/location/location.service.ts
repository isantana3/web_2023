import { api } from "service/server";

import { type ILocation } from "global/location.types";
import { type IDefaultResponse } from "service/server.types";

export const locationService = {
  getLocations: async (): Promise<IDefaultResponse<ILocation[]>> => {
    const { status, data } = await api.get("/location");
    return {
      status,
      data,
    };
  },

  getLocation: async (id: string): Promise<IDefaultResponse<ILocation>> => {
    const { status, data } = await api.get(`/location/${id}`);
    return {
      status,
      data,
    };
  },

  updateLocation: async (
    id: string,
    lab: ILocation
  ): Promise<IDefaultResponse<ILocation>> => {
    const { status, data } = await api.put(`/location/${id}`, lab);
    return {
      status,
      data,
    };
  },

  deleteLocation: async (id: string): Promise<IDefaultResponse<ILocation>> => {
    const { status, data } = await api.delete(`/location/${id}`);
    return {
      status,
      data,
    };
  },

  createLocation: async (
    lab: ILocation
  ): Promise<IDefaultResponse<ILocation>> => {
    const { status, data } = await api.post("/location", lab);
    return {
      status,
      data,
    };
  },
};
