import { Navbar } from "components/Navbar";
import { Wrapper } from "./Login.styles";
import { LoginSchema } from "src\pages\Login\Login.schema.ts";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { Form } from "components/Form/Form";

export function Login(): JSX.Element {
  return (
    <Wrapper>
      <Navbar />
      <div id="all">
        <div id="leftSide">
          <img src="src\assets\images\imgLogin.png" alt="Imagem com computadores dispostos em um laboratório">
          <div id="blue"></div>
      </div>

        <div id="rightSide">
          <img src="src\assets\images\logo.png" alt="Logo do colegiado">
          <Form schema = {LoginSchema} onSubmit = {login}>
            <Input
              label = "Email"
              placeholder="email@uesc.br"
              type="text"
              name="email"
            />

            <Input
              label = "Senha"
              placeholder="*********"
              type = "password"
              name = "password"
            />
            <Button center label="Entrar" type= "submit" />
            </Form>
        </div>
      </div>
    </Wrapper>
  );
}
