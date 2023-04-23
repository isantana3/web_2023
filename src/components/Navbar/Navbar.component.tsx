import colcicLogo from "assets/images/logo.png";

import { Container, Title } from "./Navbar.styles";

export function Navbar(): JSX.Element {
  return (
    <Container>
      <img src={colcicLogo} />
      <Title>COLCIC - SISTEMA DE GESTÃO DE LABORATÓRIOS</Title>
    </Container>
  );
}
