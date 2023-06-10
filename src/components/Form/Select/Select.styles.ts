import styled, { css } from "styled-components";

import { type SelectStylesType } from "./Select.types";

export const Container = styled.div<SelectStylesType>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 150px;
  width: ${({ width }) => width ?? 100}%;

  ${({ error }) =>
    error &&
    css`
      * {
        border-color: red !important;
        color: red !important;
      }
    `} * {
    font-size: 14px !important;
  }
`;

export const Label = styled.div`
  font-size: 14px;
`;
