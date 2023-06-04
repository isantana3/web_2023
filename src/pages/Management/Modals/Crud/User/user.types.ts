import { type IUseModal } from "global/modals.types";
import { type IUser } from "global/user.types";

export interface IUseUser {
  create: {
    hook: IUseModal;
    modal: JSX.Element;
  };
  edit: {
    hook: IUseModal;
    modal: JSX.Element;
  };
  data: IUser[];
  table: JSX.Element;
}
