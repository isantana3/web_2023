import { type ILaboratory } from "global/laboratory.types";
import { type IUseModal } from "global/modals.types";

export interface ILaboratoriesProps extends IUseModal {
  onSuccess: (data: ILaboratory) => void;
}
