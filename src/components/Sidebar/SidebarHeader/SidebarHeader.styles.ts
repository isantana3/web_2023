import styled from "styled-components";
import { Theme } from "styles/Themes";

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid ${Theme.Sidebar.stroke};
  margin-bottom: 2rem;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${Theme.Sidebar.headerIcon};
`;

export const EditButon = styled.button`
  border: 1px solid ${Theme.Sidebar.fontBlue};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 6px;
  background: #e6e9ec;
  border-radius: 6px;
  color: ${Theme.Sidebar.fontBlue};
  background-color: ${Theme.Sidebar.backgroundBlue};
`;

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  color: ${Theme.Sidebar.font};
`;
