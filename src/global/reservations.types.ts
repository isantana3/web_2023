import { type ILaboratory } from "./laboratory.types";
import { type IUser } from "./user.types";

export type ReservationStatusType = "reserved" | "cancelled" | "finished";

export interface IReservation {
  _id?: string;
  label: string;
  previousObservation?: string;
  laterObservation?: string;
  responsible: string;
  room: string;
  startDate: string;
  endDate: string;
  status: ReservationStatusType;
}

export interface IReservationList {
  label: string;
  previousObservation?: string;
  laterObservation?: string;
  responsible: IUser;
  room: ILaboratory;
  startDate: string;
  endDate: string;
  status: ReservationStatusType;
  _id?: string;
}
