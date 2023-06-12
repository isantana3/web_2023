import { useState } from "react";

import colcicLogo from "assets/images/logo.png";
import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";
import { Navbar } from "components/Navbar";

import { StepIndicator } from "./StepIndicator/StepIndicator.component";
import { RegisterSchema } from "./example.schema";

import {
  ButtonRow,
  ButtonWrapper,
  Container,
  Content,
  FormContainer,
  Header,
  InputRow,
  LogoTitle,
  SubTitle,
  Title,
  TitleContainer,
} from "./Register.styles";

export function Register(): JSX.Element {
  const [isStepOne, setIsStepOne] = useState(true);

  function validateForm(data: { email: string; password: string }): boolean {
    if (data) {
      return true;
    }
    return false;
  }

  function handleSubmit(data: { email: string; password: string }): any {
    setIsStepOne(!isStepOne);
    // if (data && validateForm(data)) {
    //   setIsStepOne(!isStepOne);
    // }
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
          <div>
            {isStepOne ? (
              <Form onSubmit={handleSubmit} schema={RegisterSchema}>
                <Input
                  label="E-mail"
                  name="email"
                  type="text"
                  placeholder="E-mail"
                  defaultValue={""}
                />
                <Input
                  label="Senha"
                  name="password"
                  type="password"
                  placeholder="Senha"
                  defaultValue={""}
                />

                <ButtonWrapper>
                  <Button label="Continuar" color="primary" type="submit" />
                </ButtonWrapper>
              </Form>
            ) : (
              <Form onSubmit={handleSubmit} schema={RegisterSchema}>
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
          </div>
        </FormContainer>
      </Content>
    </Container>
  );
}