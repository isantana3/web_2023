import { useState } from "react";

import { Navbar } from "components/Navbar";
import { Sidebar } from "components/Sidebar/Sidebar";

import { type IRoutesTemplateProps } from "./RoutesTemplate.types";

import { Container, ContentContainer } from "./RoutesTemplate.styles";

export function RoutesTemplate({
  children,
}: IRoutesTemplateProps): JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Container>
      <Navbar />
      <ContentContainer>
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        {children}
      </ContentContainer>
    </Container>
  );
}
