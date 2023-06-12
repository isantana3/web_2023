import { type Icons } from "global/icons.constants";
import { Theme } from "styles/Themes";

import { type ReservationStatusType } from "global/reservations.types";

export type LaboratoryTagType = "CONFIRMED" | "PENDING" | "REJECTED";

export interface ILaboratoryTagProps {
  status: ReservationStatusType;
  label: string;
}

export const LaboratoryTagIcons: Record<
  ReservationStatusType,
  keyof typeof Icons
> = {
  finished: "ConfirmIcon",
  cancelled: "RejectedIcon",
  reserved: "PendingIcon",
};

export const LaboratoryTagColors: Record<ReservationStatusType, string> = {
  finished: Theme.Components.laboratoryTag.confirmed,
  reserved: Theme.Components.laboratoryTag.pending,
  cancelled: Theme.Components.laboratoryTag.rejected,
};

export type LaboratoryTagStylesType = Pick<ILaboratoryTagProps, "status">;
