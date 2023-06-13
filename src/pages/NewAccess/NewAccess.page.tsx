import colcicLogo from "assets/images/logo.png";
import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Input";
import { Navbar } from "components/Navbar";

import { NewAccessSchema } from "./NewAccess.schema";

import {
  CentralizedContent,
  Container,
  Header,
  SmallText,
  Title,
} from "./NewAccess.styles";

export function NewAccess(): JSX.Element {
  return (
    <Container>
      <Navbar />
      <CentralizedContent>
        <Form onSubmit={(data) => {}} schema={NewAccessSchema}>
          <Header>
            <img src={colcicLogo} />
            <Title>COLCIC</Title>
          </Header>
          <SmallText>Atualize suas credenciais antes de continuar</SmallText>
          <Input
            type="password"
            placeholder="Nova senha"
            defaultValue={""}
            onChange={(text) => {}}
          />
          <Input
            type="password"
            placeholder="Confirme a senha"
            defaultValue={""}
            onChange={(text) => {}}
          />

          <Button label="Continuar" color="primary" type="submit" center />
        </Form>
      </CentralizedContent>
    </Container>
  );
}
