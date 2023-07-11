import { api } from "service/server";

import { type ILaboratory } from "global/laboratory.types";
import {
  type IReservation,
  type IReservationList,
} from "global/reservations.types";
import {
  type IDefaultPaginated,
  type IDefaultResponse,
  type IDefaultResponsePaginated,
} from "service/server.types";

export const reservationService = {
  getReservations: async ({
    page = 1,
    limit = 10,
    id = "",
  }: IDefaultPaginated): Promise<
    IDefaultResponsePaginated<IReservationList[]>
  > => {
    const {
      status,
      data: { data },
    } = await api.get(`/reservations?responsible=${id}`, {
      params: { page, limit },
    });
    return {
      status,
      data,
    };
  },

  getReservationsNormal: async ({
    id = "",
  }: {
    id?: string;
  }): Promise<IDefaultResponsePaginated<IReservationList[]>> => {
    if (id) {
      const {
        status,
        data: { data },
      } = await api.get(`/reservations/id=${id}`);
      return {
        status,
        ...data,
      };
    }

    const {
      status,
      data: { data },
    } = await api.get(`/reservations/`);
    return {
      status,
      data,
    };
  },

  getReservation: async (
    id: string
  ): Promise<IDefaultResponse<IReservationList>> => {
    const { status, data } = await api.get(`/reservations/${id}`);
    return {
      status,
      data,
    };
  },

  getAvailableReservations: async (
    pavilion: string,
    startDate: string,
    endDate: string
  ): Promise<IDefaultResponse<ILaboratory[]>> => {
    const { status, data } = await api.get(
      `reservations/available-rooms/?pavilion=${pavilion}&startDate=${startDate}&endDate=${endDate}`
    );
    return {
      status,
      data,
    };
  },

  updateReservation: async (
    id: string,
    booking: Omit<IReservation, "_id" & "password">
  ): Promise<IDefaultResponse<IReservation>> => {
    const { status, data } = await api.patch(`/reservations/${id}`, booking);
    return {
      status,
      data,
    };
  },

  deleteReservation: async (
    id: string
  ): Promise<IDefaultResponse<IReservation>> => {
    const { status, data } = await api.delete(`/reservations/${id}`);
    return {
      status,
      data,
    };
  },

  createReservation: async (
    booking: Omit<IReservation, "_id">
  ): Promise<IDefaultResponse<IReservation>> => {
    const { status, data } = await api.post("/reservations", booking);
    return {
      status,
      data,
    };
  },
};
