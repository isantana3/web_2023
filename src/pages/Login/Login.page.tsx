import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";
import { Navbar } from "components/Navbar";
import { Title } from "components/Navbar/Navbar.styles";

import { LoginSchema } from "./Login.schema";

import { Content, LeftSide, RightSide, Wrapper } from "./Login.styles";
import { SmallText } from "pages/ForgotPassword/ForgotPassword.styles";

export function Login(): JSX.Element {
  function login(data: unknown): void {}
  return (
    <Wrapper>
      <Navbar />
      <Content>
        <LeftSide>
          <img
            src="src\assets\images\imgLogin.png"
            alt="Imagem com computadores dispostos em um laboratório"
          />
          <div />
        </LeftSide>
        <RightSide>
          <img
            id="colcicLogo"
            src="src\assets\images\logo.png"
            alt="Logo do colegiado"
          />
          <Title>COLCIC</Title>
          <Form schema={LoginSchema} onSubmit={login}>
            <Input
              label="Email"
              placeholder="email@uesc.br"
              type="text"
              name="email"
            />
            <Input
              label="Senha"
              placeholder="*********"
              type="password"
              name="password"
            />
            <SmallText>Esqueci minha senha</SmallText>
            <Button center label="Entrar" type="submit" />
            <SmallText>Novo aqui? Faça o seu cadastro</SmallText>
          </Form>
        </RightSide>
      </Content>
    </Wrapper>
  );
}
