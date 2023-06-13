import { useNavigate } from "react-router-dom";
import { userService } from "service/user/user.service";
import { useAuth } from "store/slices/auth/useAuth";

import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";
import { Navbar } from "components/Navbar";
import { Title } from "components/Navbar/Navbar.styles";

import { LoginSchema } from "./Login.schema";

import { Content, LeftSide, RightSide, Wrapper } from "./Login.styles";
import { SmallText } from "pages/ForgotPassword/ForgotPassword.styles";

export function Login(): JSX.Element {
  const navigate = useNavigate();
  const { authenticate } = useAuth();

  const login = async (): Promise<void> => {
    const { data } = await userService.getUser("64623504921a64b1f6991cd1");
    data.token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYyMzUwNDkyMWE2NGIxZjY5OTFjZDEiLCJuYW1lIjoiUm9iZXJ0byBDYXJsb3MiLCJlbWFpbCI6InJvYmVydG8yQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDU2NzgiLCJyZWdpc3RyYXRpb24iOiIyMDIwMjAxNTQ1Iiwib2ZmaWNlIjoicHJvZmVzc29yIiwicm9sZSI6ImFkbWluIn0.bOR3z4xVkflHGonUQ6R-8g-saEPf1_op9oGD1yAfh88";
    authenticate({ user: data });
  };

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
            <SmallText
              onClick={() => {
                navigate("/recuperar-senha");
              }}
            >
              Esqueci minha senha
            </SmallText>
            <Button callback={login} center label="Entrar" type="submit" />
            <SmallText
              onClick={() => {
                navigate("/cadastro");
              }}
            >
              Novo aqui? Faça o seu cadastro
            </SmallText>
          </Form>
        </RightSide>
      </Content>
    </Wrapper>
  );
}
