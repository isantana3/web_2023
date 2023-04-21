import { Icons } from "global/icons.constants";

import { type ISidebarItemProps } from "./SidebarItem.types";

import { Container, Label } from "./SidebarItem.styles";

export function SidebarItem({
  label,
  active = false,
  icon,
}: ISidebarItemProps): JSX.Element {
  const Icon = Icons[icon];

  return (
    <Container active={active}>
      <Icon />
      <Label>{label}</Label>
    </Container>
  );
}
