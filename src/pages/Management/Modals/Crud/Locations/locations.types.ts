import { type ILocation } from "global/location.types";
import { type IUseModal } from "global/modals.types";

export interface IUseLocations {
  create: {
    hook: IUseModal;
    modal: JSX.Element;
  };
  edit: {
    hook: IUseModal;
    modal: JSX.Element;
  };
  data: ILocation[];
  table: JSX.Element;
}
