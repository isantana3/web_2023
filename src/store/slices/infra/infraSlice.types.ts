import { type IInfra } from "global/infra.types";

export interface IInfraSlice {
  infra: IInfra;
}

export interface IUseInfra extends IInfraSlice {
  setinfra: (payload: IInfraSlice) => void;
}
