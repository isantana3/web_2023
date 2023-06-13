import styled, { css } from "styled-components";

import { type InputStylesType } from "./Input.types";

export const Container = styled.div<InputStylesType>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 10px;
  width: ${({ width }) => width ?? 100}%;

  ${({ error }) =>
    error &&
    css`
      * {
        border-color: red !important;
        color: red !important;
      }
      input::placeholder {
        color: red;
        opacity: 1;
      }
    `}
`;

export const InputComponent = styled.input`
  border: 1px solid ${({ theme }) => theme.Components.input.stroke};
  padding: 10px 14px;
  color: #000;
  font-weight: 500;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.15);
  border-radius: 8px;
  width: 100%;
  background-color: ${({ theme }) => theme.Dashboard.background};

  ::placeholder {
    color: #00000055;
  }

  :disabled {
    background-color: ${({ theme }) =>
      theme.Components.input.disabled} !important;
    color: ${({ theme }) => theme.Components.input.color} !important;
    cursor: not-allowed;
  }
`;

export const Label = styled.span`
  font-size: 14px;
`;
