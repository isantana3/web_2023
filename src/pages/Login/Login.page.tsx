import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "service/auth/auth.service";
import { useAuth } from "store/slices/auth/useAuth";

import Logo from "assets/images/imgLogin.png";
import ColcicLogo from "assets/images/logo.png";
import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";
import { Navbar } from "components/Navbar";
import { Title } from "components/Navbar/Navbar.styles";

import { LoginSchema } from "./Login.schema";

import { type IAuthLogin } from "global/auth.types";

import { Content, LeftSide, RightSide, Wrapper } from "./Login.styles";
import { SmallText } from "pages/ForgotPassword/ForgotPassword.styles";

export function Login(): JSX.Element {
  const navigate = useNavigate();
  const { authenticate } = useAuth();

  // Função para obter o CSRF token
  const fetchCsrfToken = async () => {
    try {
      const response = await authService.getCsrfToken(); // Assumindo que você tem um método para obter o CSRF token
      const { csrfToken } = response.data;
      // Armazenar o CSRF token em um cookie
      document.cookie = `XSRF-TOKEN=${csrfToken}; path=/;`;
    } catch (error) {
      console.error("Erro ao obter CSRF token:", error);
    }
  };

  // UseEffect para obter o CSRF token ao carregar o componente
  useEffect(() => {
    fetchCsrfToken();
  }, []);

  async function handleSubmit(userLogin: IAuthLogin): Promise<void> {
    const { data } = await authService.login(userLogin);
    const { token, user } = data;

    localStorage.setItem("userData", JSON.stringify(user));
    authenticate({ user: { ...user, token } });
  }

  return (
    <Wrapper>
      <Navbar />
      <Content>
        <LeftSide>
          <img
            src={Logo}
            alt="Imagem com computadores dispostos em um laboratório"
          />
          <div />
        </LeftSide>
        <RightSide>
          <img id="colcicLogo" src={ColcicLogo} alt="Logo do colegiado" />
          <Title>COLCIC</Title>
          <Form schema={LoginSchema} onSubmit={handleSubmit}>
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
            <Button center label="Entrar" type="submit" />
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
