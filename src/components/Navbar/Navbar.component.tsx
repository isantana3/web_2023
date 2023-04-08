import colcicLogo from "assets/images/logo.png";

import { Container } from "./Navbar.styles";

export function Navbar(): JSX.Element {
  return (
    <Container>
      <img src={colcicLogo} />
      <h1>COLCIC - SISTEMA DE GESTÃO DE LABORATÓRIOS</h1>
    </Container>
  );
}
