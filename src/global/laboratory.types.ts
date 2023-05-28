import { type ILocation } from "./location.types";

export interface ILaboratory {
  _id: string;
  label: string;
  pavilion: ILocation;
}
