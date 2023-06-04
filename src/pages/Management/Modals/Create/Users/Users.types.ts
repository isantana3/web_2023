import { type IUseModal } from "global/modals.types";
import { type IUser } from "global/user.types";

export interface IUserProps extends IUseModal {
  onSuccess: (data: IUser) => void;
}
