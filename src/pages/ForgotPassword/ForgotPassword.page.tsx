import { useNavigate } from "react-router-dom";
import { authService } from "service/auth/auth.service";

import colcicLogo from "assets/images/logo.png";
import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";
import { Navbar } from "components/Navbar";

import { ForgotPasswordSchema } from "./ForgotPassword.schema";

import { type IForgotPassword } from "global/auth.types";

import {
  ButtonLink,
  ButtonWrapper,
  CentralizedContent,
  Container,
  Header,
  SmallText,
  Title,
} from "./ForgotPassword.styles";

export function ForgotPassword(): JSX.Element {
  const navigate = useNavigate();

  function handleGoBack(): void {
    navigate("/");
  }

  async function handleSubmit(data: IForgotPassword): Promise<void> {
    try {
      await authService.forgotPassword({ ...data });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container>
      <Navbar />
      <CentralizedContent>
        <Form onSubmit={handleSubmit} schema={ForgotPasswordSchema}>
          <Header>
            <img src={colcicLogo} />
            <Title>COLCIC</Title>
          </Header>
          <SmallText>
            Insira seu email institucional para renovar sua senha
          </SmallText>
          <Input
            label=""
            name="email"
            type="email"
            placeholder="Email"
            defaultValue={""}
          />
          <ButtonWrapper>
            <ButtonLink onClick={handleGoBack}>Voltar</ButtonLink>
            <Button label="Enviar Email" color="primary" type="submit" center />
          </ButtonWrapper>
        </Form>
      </CentralizedContent>
    </Container>
  );
}
