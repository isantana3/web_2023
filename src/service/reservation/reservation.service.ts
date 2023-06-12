import { api } from "service/server";

import { type ILaboratory } from "global/laboratory.types";
import {
  type IReservation,
  type IReservationList,
} from "global/reservations.types";
import {
  type IDefaultPaginated,
  type IDefaultResponse,
} from "service/server.types";

export const reservationService = {
  getReservations: async ({
    page = 1,
    limit = 10,
  }: IDefaultPaginated): Promise<IDefaultResponse<IReservation[]>> => {
    return await api.get("/reservations", {
      params: { page, limit },
    });
  },

  getReservationsNormal: async ({
    id = "",
  }: {
    id?: string;
  }): Promise<IDefaultResponse<IReservationList[]>> => {
    if (id) {
      return await api.get(`/reservations/id=${id}`);
    }
    return await api.get(`/reservations/`);
  },

  getReservation: async (
    id: string
  ): Promise<IDefaultResponse<IReservationList>> => {
    return await api.get(`/reservations/${id}`);
  },

  getAvailableReservations: async (
    pavilion: string,
    startDate: string,
    endDate: string
  ): Promise<IDefaultResponse<ILaboratory[]>> => {
    return await api.get(
      `reservations/available-rooms/?pavilion=${pavilion}&startDate=${startDate}&endDate=${endDate}`
    );
  },

  updateReservation: async (
    id: string,
    data: Omit<IReservation, "_id" & "password">
  ): Promise<IDefaultResponse<IReservation>> => {
    return await api.patch(`/reservations/${id}`, data);
  },

  deleteReservation: async (
    id: string
  ): Promise<IDefaultResponse<IReservation>> => {
    return await api.delete(`/reservations/${id}`);
  },

  createReservation: async (
    data: Omit<IReservation, "_id">
  ): Promise<IDefaultResponse<IReservation>> => {
    return await api.post("/reservations", data);
  },
};
