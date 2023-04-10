import { Tab, TabList, TabPanel, Tabs as TabContainer } from "react-tabs";

import { type ITabsProps } from "./Tabs.types";

export function Tabs({ headers, items }: ITabsProps): JSX.Element {
  return (
    <TabContainer>
      <TabList>
        {headers.map((title) => (
          <Tab key={title}>{title}</Tab>
        ))}
      </TabList>
      {items.map((item, index) => {
        return <TabPanel key={`tab-${index}`}>{item}</TabPanel>;
      })}
    </TabContainer>
  );
}
