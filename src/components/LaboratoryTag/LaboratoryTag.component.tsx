import { Icons } from "global/icons.constants";

import {
  type ILaboratoryTagProps,
  LaboratoryTagIcons,
} from "./LaboratoryTag.types";
import { type ReservationStatusType } from "global/reservations.types";

import { Container, Label } from "./LaboratoryTag.styles";

export function LaboratoryTag({
  label,
  status,
}: ILaboratoryTagProps): JSX.Element {
  const iconKey = LaboratoryTagIcons[status];
  const Icon = Icons[iconKey];
  const labels: Record<ReservationStatusType, string> = {
    reserved: "Pendente",
    cancelled: "Rejeitado",
    finished: "Reservado",
  };

  return (
    <Container status={status}>
      <Icon />
      <Label>{labels[status]}</Label>
    </Container>
  );
}
