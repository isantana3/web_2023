import { type ILocation } from "global/location.types";
import { type IUseModal } from "global/modals.types";

export interface ILaboratoriesProps extends IUseModal {
  onSuccess: (data: ILocation) => void;
}
