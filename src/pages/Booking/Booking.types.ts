import { type NavigateFunction } from "react-router-dom";

import { type ILaboratory } from "global/laboratory.types";
import { type ILocation } from "global/location.types";
import { type IReservationList } from "global/reservations.types";

export interface IBookingUnique {
  label: string;
  observation?: string;
  hourStart: string;
  hourEnd: string;
  dateStart: string;
  laboratory: string;
}

export interface ICreateFormProps {
  isDisabled: boolean | string | undefined;
  startDate: string;
  endDate: string;
  pavilion: string;
  laboratory: ILaboratory[];
  locations: ILocation[] | undefined;
  navigate: NavigateFunction;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
  setPavilion: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (data: IBookingUnique) => Promise<void>;
}

export interface IEditFormProps {
  id: string | number;
  booking: IReservationList;
  isDisabled: boolean | string | undefined;
  startDate: string;
  endDate: string;
  pavilion: string;
  laboratory: ILaboratory[];
  locations: ILocation[];
  navigate: NavigateFunction;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
  setPavilion: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (data: IBookingUnique) => Promise<void>;
}
