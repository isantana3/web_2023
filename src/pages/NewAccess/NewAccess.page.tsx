import { useEffect, useState } from "react";

import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { authService } from "service/auth/auth.service";

import colcicLogo from "assets/images/logo.png";
import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";
import { Navbar } from "components/Navbar";

import { NewAccessSchema } from "./NewAccess.schema";

import { type IFormData, type IRequestForm } from "./NewAccess.types";

import {
  CentralizedContent,
  Container,
  Header,
  SmallText,
  Title,
} from "./NewAccess.styles";

export function NewAccess(): JSX.Element {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [token, setToken] = useState<string>("");

  async function handleSubmit(data: IFormData): Promise<void> {
    try {
      const { password } = data;
      const newAccessData: IRequestForm = { token, password };
      const response = await authService.newAccess(newAccessData);

      if (response.status === 201) {
        toast.success("Conta ativada com sucesso!");
        navigate("/");
      }
    } catch (error) {
      toast("Ocorreu um erro inesperado. Tente novamente mais tarde.");
    }
  }

  useEffect(() => {
    const queryParamToken = searchParams.get("token") as string;
    setToken(queryParamToken);
  }, []);

  return (
    <Container>
      <Navbar />
      <CentralizedContent>
        <Form onSubmit={handleSubmit} schema={NewAccessSchema}>
          <Header>
            <img src={colcicLogo} />
            <Title>COLCIC</Title>
          </Header>
          <SmallText>Atualize suas credenciais antes de continuar</SmallText>
          <Input
            label=""
            name="password"
            type="password"
            placeholder="Nova senha"
          />
          <Input
            label=""
            name="confirm_password"
            type="password"
            placeholder="Confirme a senha"
          />

          <Button label="Continuar" color="primary" type="submit" center />
        </Form>
      </CentralizedContent>
    </Container>
  );
}
