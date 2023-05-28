import { type ILaboratory } from "./laboratory.types";

export interface IInfra {
  _id: string;
  room: ILaboratory;
  label: string;
  code: string;
}
