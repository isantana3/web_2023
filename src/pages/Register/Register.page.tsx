import { useState } from "react";

import { useNavigate } from "react-router-dom";

import colcicLogo from "assets/images/logo.png";
import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";
import { Navbar } from "components/Navbar";

import { StepIndicator } from "./StepIndicator/StepIndicator.component";
import { RegisterSchema } from "./example.schema";

import { type IFormData } from "./Register.types";

import {
  ButtonLink,
  ButtonLinkWrapper,
  ButtonRow,
  ButtonWrapper,
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

  function handleGoBack(): void {
    navigate("/");
  }

  function validateForm(data: IFormData): boolean {
    if (data) {
      return true;
    }
    return false;
  }

  function handleSubmit(data: IFormData): any {
    console.log(data);
    // if (data && validateForm(data)) {
    //   setIsStepOne(!isStepOne);
    // }
  }

  function handleBackButton(): void {
    setIsStepOne(true);
  }

  function handleStepOne(): void {
    setIsStepOne(false);
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
          <Form onSubmit={handleSubmit} schema={RegisterSchema}>
            {isStepOne ? (
              <>
                <InputContainer>
                  <Input
                    label="E-mail"
                    name="email"
                    type="text"
                    placeholder="E-mail"
                    defaultValue={""}
                  />
                </InputContainer>

                <ButtonLinkWrapper>
                  <ButtonLink onClick={handleGoBack}>Voltar</ButtonLink>
                  <Button
                    label="Continuar"
                    color="primary"
                    callback={handleStepOne}
                  />
                </ButtonLinkWrapper>
              </>
            ) : (
              <>
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
                  <Button
                    label="Continuar"
                    color="primary"
                    callback={handleSubmit}
                  />
                </ButtonRow>
              </>
            )}
          </Form>
        </FormContainer>
      </Content>
    </Container>
  );
}
