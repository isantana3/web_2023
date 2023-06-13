import styled from "styled-components";

import { type InputStylesType } from "./Input.types";

export const Container = styled.div<InputStylesType>`
  display: flex;
  flex-direction: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  width: ${({ width }) => width ?? 100}%;
  border: 1px solid ${({ theme }) => theme.Components.input.stroke};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.15);
  border-radius: 8px;
  background-color: ${({ theme }) => theme.Dashboard.background};
`;

export const InputComponent = styled.input`
  color: #000;
  font-weight: 500;
  width: 100%;
  height: 100%;
  background-color: transparent !important;

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
