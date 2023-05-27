import { type ILaboratory } from "global/laboratory.types";

export interface ILaboratorySlice {
  laboratory: ILaboratory;
}

export interface IUseLaboratory extends ILaboratorySlice {
  setLaboratory: (payload: ILaboratorySlice) => void;
}
