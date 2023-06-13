import colcicLogo from "assets/images/logo.png";
import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Input";
import { Navbar } from "components/Navbar";

import { ForgotPasswordSchema } from "./ForgotPassword.schema";

import {
  CentralizedContent,
  Container,
  Header,
  SmallText,
  Title,
} from "./ForgotPassword.styles";

export function ForgotPassword(): JSX.Element {
  return (
    <Container>
      <Navbar />
      <CentralizedContent>
        <Form onSubmit={(data) => {}} schema={ForgotPasswordSchema}>
          <Header>
            <img src={colcicLogo} />
            <Title>COLCIC</Title>
          </Header>
          <SmallText>
            Insira seu email institucional para renovar sua senha
          </SmallText>
          <Input
            type="email"
            placeholder="Email"
            defaultValue={""}
            onChange={(text) => {}}
          />
          <Button label="Enviar Email" color="primary" type="submit" center />
        </Form>
      </CentralizedContent>
    </Container>
  );
}
