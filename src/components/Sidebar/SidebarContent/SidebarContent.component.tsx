import { type ISidebarContentProps } from "./SidebarContent.types";

import { Container } from "./SidebarContent.styles";

export function SidebarContent({
  children,
}: ISidebarContentProps): JSX.Element {
  return <Container>{children}</Container>;
}
