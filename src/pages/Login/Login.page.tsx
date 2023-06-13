import { Navbar } from "components/Navbar";
import { Wrapper } from "./Login.styles";
import { LoginSchema } from "src\pages\Login\Login.schema.ts";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { SmallText } from "pages/ForgotPassword/ForgotPassword.styles";
import { Title } from "components/Navbar/Navbar.styles";

export function Login(): JSX.Element {
  return (
    <Wrapper>
      <Navbar />
      <div id="all">
        <div id="leftSide">
          <img id="labPic" src="src\assets\images\imgLogin.png" alt="Imagem com computadores dispostos em um laboratório">
          <div id="blue"></div>
      </div>

        <div id="rightSide">
          <img id="colcicLogo" src="src\assets\images\logo.png" alt="Logo do colegiado">
          <Title id="colcicTitle"></Title>
          <Form schema = {LoginSchema} onSubmit = {login}>
            <Input
              label = "Email"
              placeholder="email@uesc.br"
              type="text"
              name="email"
            />
<!-- Não sei como colocar os icones pequenos de usuário e senha dentro da caixa dos inputs -->
            <Input
              label = "Senha"
              placeholder="*********"
              type = "password"
              name = "password"
            />
            <SmallText>Esqueci minha senha</SmallText>
            <Button center label="Entrar" type= "submit" />
            <SmallText id="newHere">Esqueci minha senha</SmallText>
            </Form>
        </div>
      </div>
    </Wrapper>
  );
}
