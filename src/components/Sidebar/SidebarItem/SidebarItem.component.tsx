import { Icons } from "global/icons.constants";

import { type ISidebarItemProps } from "./SidebarItem.types";

import { Container, Label } from "./SidebarItem.styles";

export function SidebarItem({
  label,
  isActive = false,
  icon,
  onClick,
}: ISidebarItemProps): JSX.Element {
  const Icon = Icons[icon];

  return (
    <Container onClick={onClick} isActive={isActive}>
      <Icon />
      <Label>{label}</Label>
    </Container>
  );
}
