import { toast } from "react-toastify";
import { userService } from "service/user/user.service";
import { useAuth } from "store/slices/auth/useAuth";
import { useLanguage } from "store/slices/lang/useLang";

import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";
import { UserTypeSelect } from "components/UserType/UserType.component";

import { AdminSchema } from "./Admin.schema";

import { type IUser } from "global/user.types";

import {
  Content,
  Footer,
  Header,
  InputRow,
  SubTitle,
  Title,
  Wrapper,
} from "./Admin.styles";

export function Admin(): JSX.Element {
  const { lang, currentLangKey } = useLanguage();
  const { user, authenticate } = useAuth();

  async function onSubmit(data: IUser): Promise<void> {
    const response = await userService.updateUser(user._id, {
      ...user,
      ...data,
      email: user.email,
    });

    if (!response) {
      toast.error("Erro ao alterar dados...");
      return;
    }

    toast.success("Dados alterados com sucesso");

    authenticate({
      user: {
        ...user,
        ...data,
        email: user.email,
      },
    });
  }

  return (
    <Wrapper>
      <Header>
        <Title>{lang.configuration.title[currentLangKey]}</Title>
        <SubTitle>{lang.configuration.subtitle[currentLangKey]}</SubTitle>
      </Header>
      <Content>
        <Form schema={AdminSchema} onSubmit={onSubmit}>
          <Input
            label="Nome"
            type="text"
            name="name"
            placeholder="Aluno Uesc"
            defaultValue={user.name}
          />
          <Input
            label="Email"
            type="text"
            name="email"
            disabled
            placeholder="aluno.curso@uesc.com"
            defaultValue={user.email}
          />
          <InputRow>
            <Input
              label="Matricula"
              type="text"
              name="registration"
              placeholder="202320307"
              defaultValue={user.registration.toString()}
              width={90}
            />
            <UserTypeSelect defaultValue={user.office} />
          </InputRow>
          <Footer>
            <Button color="warning" label={"Cancelar"} />
            <Button type="submit" label={"Salvar Alterações"} />
          </Footer>
        </Form>
      </Content>
    </Wrapper>
  );
}
