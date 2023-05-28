import { Icons } from "global/icons.constants";
import { type IRoutes, routes } from "global/routes.constants";
import { useNavigate } from "react-router-dom";
import { useAuth } from "store/slices/auth/useAuth";

import { SidebarContent } from "../SidebarContent";
import { SidebarHeader } from "../SidebarHeader";
import { SidebarItem } from "../SidebarItem";

import { type ISidebarProps } from "./Sidebar.types";

import { Container, SidebarTrigger, SidebarWrapper } from "./Sidebar.styles";

export function Sidebar({
  isCollapsed,
  setIsCollapsed,
}: ISidebarProps): JSX.Element {
  const { user } = useAuth();

  const validateRoute = (route: IRoutes): boolean => {
    if (route.users === "ALL") return true;

    return route.users.includes(user.role);
  };

  const navigate = useNavigate();

  return (
    <Container isCollapsed={isCollapsed}>
      <SidebarWrapper>
        <SidebarTrigger
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
          isCollapsed={isCollapsed}
        >
          <Icons.ChevronIcon />
        </SidebarTrigger>
        <SidebarHeader />
        <SidebarContent>
          {user &&
            routes.map(
              (route, id) =>
                validateRoute(route) && (
                  <SidebarItem
                    key={`Route-${id}`}
                    isActive={window.location.pathname === route.path}
                    label={route.name}
                    icon={route.icon}
                    onClick={() => {
                      navigate(route.path);
                    }}
                  />
                )
            )}
        </SidebarContent>
      </SidebarWrapper>
    </Container>
  );
}
