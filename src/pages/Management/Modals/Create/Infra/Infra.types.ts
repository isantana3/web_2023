import { type IInfra } from "global/infra.types";
import { type IUseModal } from "global/modals.types";

export interface IInfraProps extends IUseModal {
  onSuccess: (data: IInfra) => void;
}
