import { useState } from "react";

import { useNavigate } from "react-router-dom";

import colcicLogo from "assets/images/logo.png";
import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";
import { Navbar } from "components/Navbar";

import { StepIndicator } from "./StepIndicator/StepIndicator.component";
import { FirstStepSchema, SecondStepSchema } from "./Register.schema";

import {
  type IFormData,
  type IStepOneFormData,
  type IStepTwoFormData,
} from "./Register.types";

import {
  ButtonLink,
  ButtonLinkWrapper,
  ButtonRow,
  Container,
  Content,
  FormContainer,
  Header,
  InputContainer,
  InputRow,
  LogoTitle,
  SubTitle,
  Title,
  TitleContainer,
} from "./Register.styles";

export function Register(): JSX.Element {
  const navigate = useNavigate();
  const [isStepOne, setIsStepOne] = useState(true);
  const [user, setUser] = useState<IFormData>({} as IFormData);

  function handleGoBack(): void {
    navigate("/");
  }

  function handleSubmitStepOne(data: IStepOneFormData): void {
    setIsStepOne(false);
    setUser((state) => ({ ...state, email: data.email }));
  }

  function handleSubmitStepTwo(data: IStepTwoFormData): void {
    setUser((state) => ({ ...state, data }));
    // TODO: adicionar token
    console.log({ user });
  }

  function handleBackButton(): void {
    setIsStepOne(true);
  }

  return (
    <Container>
      <Navbar />
      <Content>
        <Header>
          <img src={colcicLogo} />
          <LogoTitle>COLCIC</LogoTitle>
        </Header>
        <TitleContainer>
          <Title>Cadastro</Title>
          <SubTitle>Complete com as suas informações pessoais</SubTitle>
        </TitleContainer>
        <FormContainer>
          <StepIndicator stepOne={isStepOne} />
          {isStepOne ? (
            <Form onSubmit={handleSubmitStepOne} schema={FirstStepSchema}>
              <InputContainer>
                <Input
                  label="E-mail"
                  name="email"
                  type="text"
                  placeholder="E-mail"
                />
              </InputContainer>

              <ButtonLinkWrapper>
                <ButtonLink onClick={handleGoBack}>Voltar</ButtonLink>
                <Button label="Continuar" color="primary" type="submit" />
              </ButtonLinkWrapper>
            </Form>
          ) : (
            <Form onSubmit={handleSubmitStepTwo} schema={SecondStepSchema}>
              <Input
                label="Nome"
                name="name"
                type="text"
                placeholder="Nome"
                defaultValue={""}
              />
              <InputRow>
                <Input
                  label="Matricula"
                  name="registration"
                  type="text"
                  placeholder="Matricula"
                  defaultValue={""}
                />

                <Input
                  label="Cargo"
                  name="position"
                  type="text"
                  placeholder="Cargo"
                  defaultValue={""}
                />
              </InputRow>

              <ButtonRow>
                <Button
                  label="Voltar"
                  color="darker"
                  callback={handleBackButton}
                />
                <Button label="Continuar" color="primary" type="submit" />
              </ButtonRow>
            </Form>
          )}
        </FormContainer>
      </Content>
    </Container>
  );
}
