import { type ILaboratory } from "global/laboratory.types";
import { type IUseModal } from "global/modals.types";

export interface IUseLaboratories {
  create: {
    hook: IUseModal;
    modal: JSX.Element;
  };
  edit: {
    hook: IUseModal;
    modal: JSX.Element;
  };
  data: ILaboratory[];
  table: JSX.Element;
}
