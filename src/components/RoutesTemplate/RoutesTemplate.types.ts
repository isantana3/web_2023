import { type ISidebarProps } from "components/Sidebar/Sidebar.types";

export interface IRoutesTemplateProps {
  children: JSX.Element;
}

export type RoutesTemplateStylesType = Pick<ISidebarProps, "isCollapsed">;
