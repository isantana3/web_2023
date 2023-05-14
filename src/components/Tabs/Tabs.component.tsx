import { useState } from "react";

import { TabPanel, Tabs as TabContainer } from "react-tabs";

import { type ITabsProps } from "./Tabs.types";

import { Border, Header, HeaderItem } from "./Tabs.styles";

export function Tabs({ headers, items }: ITabsProps): JSX.Element {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <TabContainer
      selectedIndex={tabIndex}
      onSelect={(index) => {
        setTabIndex(index);
      }}
    >
      <Header>
        {headers.map((title, idx) => (
          <HeaderItem $active={idx === tabIndex} key={title}>
            {title}
            <Border />
          </HeaderItem>
        ))}
      </Header>
      {items.map((item, index) => {
        return <TabPanel key={`tab-${index}`}>{item}</TabPanel>;
      })}
    </TabContainer>
  );
}
