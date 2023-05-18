import { type Icons } from "global/icons.constants";
import { Theme } from "styles/Themes";

export type LaboratoryTagType = "CONFIRMED" | "PENDING" | "REJECTED";

export interface ILaboratoryTagProps {
  status: LaboratoryTagType;
  label: string;
}

export const LaboratoryTagIcons: Record<LaboratoryTagType, keyof typeof Icons> =
  {
    CONFIRMED: "ConfirmIcon",
    REJECTED: "RejectedIcon",
    PENDING: "PendingIcon",
  };

export const LaboratoryTagColors: Record<LaboratoryTagType, string> = {
  CONFIRMED: Theme.Components.laboratoryTag.confirmed,
  PENDING: Theme.Components.laboratoryTag.pending,
  REJECTED: Theme.Components.laboratoryTag.rejected,
};

export type LaboratoryTagStylesType = Pick<ILaboratoryTagProps, "status">;
