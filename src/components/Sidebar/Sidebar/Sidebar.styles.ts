import styled, { css } from "styled-components";
import { Theme } from "styles/Themes";

import { type ISidebarStylesType } from "./Sidebar.types";

import { Container as SidebarHeader } from "../SidebarHeader/SidebarHeader.styles";
import { Container as SidebarItem } from "../SidebarItem/SidebarItem.styles";

export const Container = styled.div<ISidebarStylesType>`
  /* 260px */
  max-width: 26rem;
  width: 8rem;
  /* 80px */
  min-width: 8rem;
  transition: width 100ms ease-in-out;
  min-height: 100%;
  border-right: 1px solid ${Theme.Sidebar.stroke};

  ${({ isCollapsed }) =>
    !isCollapsed &&
    css`
      width: 26rem;
    `}

  ${({ isCollapsed }) =>
    isCollapsed &&
    css`
      ${SidebarItem} {
        span {
          display: none;
        }
      }
      ${SidebarHeader} {
        p,
        span,
        button {
          display: none;
        }
        div {
          margin-top: 3rem;
        }
      }
    `}
`;

export const SidebarWrapper = styled.div`
  position: sticky;
  top: 0;
`;

export const SidebarTrigger = styled.span<ISidebarStylesType>`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  cursor: pointer;

  ${({ isCollapsed }) =>
    isCollapsed &&
    css`
      right: 35%;
      transform: rotate(180deg);
    `}
`;
