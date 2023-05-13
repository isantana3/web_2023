import styled from "styled-components";
import { Theme } from "styles/Themes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 10px;
`;

export const InputComponent = styled.input`
  border: 1px solid ${Theme.Components.input.stroke};
  padding: 10px 14px;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  width: 100%;
  background-color: transparent !important;
`;

export const Label = styled.span`
  font-size: 14px;
`;
