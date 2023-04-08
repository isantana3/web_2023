import { type ISidebarProps } from "./Sidebar.types";

import { Container, SidebarWrapper } from "./Sidebar.styles";

export function Sidebar({
  isCollapsed,
  setIsCollapsed,
}: ISidebarProps): JSX.Element {
  return (
    <Container isCollapsed={isCollapsed}>
      <SidebarWrapper>
        <h1
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          Sidebar Sidebar Sidebar
        </h1>
      </SidebarWrapper>
    </Container>
  );
}
