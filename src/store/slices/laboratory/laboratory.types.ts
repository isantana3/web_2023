import { type ILaboratory } from "global/laboratory.types";

export interface ILaboratorySlice {
  infra: ILaboratory;
}

export interface IUseLaboratory extends ILaboratorySlice {
  setlaboratory: (payload: ILaboratorySlice) => void;
}
