import styled, { css } from "styled-components";

import { type ISidebarStylesType } from "./Sidebar.types";

export const Container = styled.div<ISidebarStylesType>`
  /* 260px */
  max-width: 26rem;
  width: 8rem;
  /* 80px */
  min-width: 8rem;
  background-color: yellow;
  transition: width 100ms ease-in-out;
  min-height: 100vh;

  ${({ isCollapsed }) =>
    !isCollapsed &&
    css`
      width: 26rem;
    `}
`;

export const SidebarWrapper = styled.div`
  position: sticky;
  top: 0;
`;
