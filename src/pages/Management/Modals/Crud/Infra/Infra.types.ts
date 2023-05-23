import { type IInfra } from "global/infra.types";
import { type IUseModal } from "global/modals.types";

export interface IUseInfra {
  create: {
    hook: IUseModal;
    modal: JSX.Element;
  };
  edit: {
    hook: IUseModal;
    modal: JSX.Element;
  };
  data: IInfra[];
  table: JSX.Element;
}
