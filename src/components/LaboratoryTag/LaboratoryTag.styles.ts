import styled from "styled-components";

import {
  LaboratoryTagColors,
  type LaboratoryTagStylesType,
} from "./LaboratoryTag.types";

export const Container = styled.div<LaboratoryTagStylesType>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3px 10px;
  gap: 4px;
  border-radius: 5px;
  background: ${({ status }) => LaboratoryTagColors[status]};
  width: fit-content;
`;

export const Label = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 13px;
  color: ${({ theme }) => theme.Components.laboratoryTag.label};
`;
