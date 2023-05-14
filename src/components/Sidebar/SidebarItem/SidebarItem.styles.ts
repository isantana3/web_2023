import styled, { css } from "styled-components";
import { Theme } from "styles/Themes";

import { type SidebarStylesType } from "./SidebarItem.types";

export const Container = styled.a<SidebarStylesType>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 11px 28px;
  gap: 12px;
  text-decoration: none;
  font-size: 15px;
  line-height: 22px;
  cursor: pointer;
  position: relative;

  background-color: ${Theme.Sidebar.default};
  color: ${Theme.Sidebar.font};

  ${({ isActive }) =>
    isActive &&
    css`
      &::before {
        content: "";
        position: absolute;
        width: 3px;
        left: 0px;
        top: 0px;
        bottom: 0px;

        background: #5f6d7e;
      }
      background-color: ${Theme.Sidebar.active};
      color: ${Theme.Sidebar.fontDarker};
    `};

  ${({ isActive }) =>
    !isActive &&
    css`
      &:hover {
        background-color: ${Theme.Sidebar.active};
        color: ${Theme.Sidebar.fontDarker};
      }
    `};
`;

export const Label = styled.span``;
