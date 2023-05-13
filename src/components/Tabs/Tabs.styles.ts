import { Tab, TabList } from "react-tabs";
import styled, { css } from "styled-components";
import { Theme } from "styles/Themes";

import { type TabsStyleType } from "./Tabs.types";

export const Container = styled.div``;

export const Header = styled(TabList)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  gap: 3rem;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

export const HeaderItem = styled(Tab)<TabsStyleType>`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 38px;
  text-align: center;
  border-bottom: 2px solid transparent;
  color: ${Theme.Components.tab.color};
  cursor: pointer;

  ${({ active }) =>
    active
      ? css`
          > span {
            width: 100%;
          }
        `
      : css`
          &:hover {
            > span {
              width: 100%;
              opacity: 50%;
            }
          }
        `}
`;

export const Border = styled.span`
  display: block;
  height: 3px;
  width: 0;
  transition: all 100ms ease-in-out;
  background-color: ${Theme.Components.tab.color};
  margin: 0 auto;
`;
