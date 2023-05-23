import styled, { css } from "styled-components";

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
  transition: all 100ms ease-in-out;
  font-weight: 600;
  background-color: ${({ theme }) => theme.Sidebar.default};
  color: ${({ theme }) => theme.Sidebar.font};

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

      background-color: ${({ theme }) => theme.Sidebar.active};
      color: ${({ theme }) => theme.Sidebar.fontDarker};
      box-shadow: 0px 4px 7px rgba(0, 0, 0, 25%);
    `};

  ${({ isActive }) =>
    !isActive &&
    css`
      &:hover {
        background-color: ${({ theme }) => theme.Sidebar.active};
        color: ${({ theme }) => theme.Sidebar.fontDarker};
      }
    `};
`;

export const Label = styled.span``;
