import { type ILocation } from "global/location.types";

export interface ILocationSlice {
  locations: ILocation;
}

export interface IUseLocation extends ILocationSlice {
  setLocation: (payload: ILocationSlice) => void;
}
