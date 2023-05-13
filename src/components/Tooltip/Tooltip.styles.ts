import styled, { css } from "styled-components";
import { Theme } from "styles/Themes";

import { type TooltipStylesType } from "./Tooltip.types";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: fit-content;

  &:hover {
    span {
      visibility: 1;
      opacity: 1;
    }
  }
`;

export const Label = styled.span<TooltipStylesType>`
  position: absolute;
  background: ${Theme.PrimaryTheme.primary};
  color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 6px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-size: 11px;
  opacity: 0;
  visibility: 0;
  transition: all 200ms ease-in-out;
  min-width: fit-content;
  word-break: keep-all;
  white-space: nowrap;

  &::before {
    content: "";
    position: absolute;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid ${Theme.PrimaryTheme.primary};
    border-radius: 8px;
    transform: rotate(269deg);
  }

  ${({ position, width, height }) =>
    position === "top" &&
    css`
      left: calc(${width / 3}px);
      top: calc(-5% - ${height}px);

      &::before {
        top: unset;
        left: 42%;
        transform: rotate(180deg);
        bottom: -0.7rem;
      }
    `}

  ${({ position, width, height }) =>
    position === "bottom" &&
    css`
      left: calc(${width / 3}px);
      top: calc(${height}px + 25%);

      &::before {
        bottom: unset;
        left: 40%;
        transform: rotate(0deg);
        top: -0.7rem;
      }
    `}

  ${({ position, width, height }) =>
    position === "left" &&
    css`
      right: calc(100% + 10px);
      top: calc(${height / 2}px - 35%);

      &::before {
        right: -1rem;
        transform: rotate(90deg);
        top: 35%;
      }
    `}

  ${({ position, height }) =>
    position === "right" &&
    css`
      left: calc(100% + 10px);
      top: calc(${(height / 2) * 0.1}%);

      &::before {
        left: -1rem;
        transform: rotate(270deg);
        top: 35%;
      }
    `}
`;
