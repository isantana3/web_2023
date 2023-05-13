import { Icons } from "global/icons.constants";

import {
  type ILaboratoryTagProps,
  LaboratoryTagIcons,
} from "./LaboratoryTag.types";

import { Container, Label } from "./LaboratoryTag.styles";

export function LaboratoryTag({
  label,
  status,
}: ILaboratoryTagProps): JSX.Element {
  const iconKey = LaboratoryTagIcons[status];
  const Icon = Icons[iconKey];

  return (
    <Container status={status}>
      <Icon />
      <Label>{label}</Label>
    </Container>
  );
}
