import { toast } from "react-toastify";
import { User as UserApi } from "service/user/user.service";
import { useAuth } from "store/slices/auth/useAuth";
import { useLanguage } from "store/slices/lang/useLang";

import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";

import { UserSchema } from "./User.schema";

import { type IUser } from "global/user.types";

import {
  Content,
  Footer,
  Header,
  InputRow,
  SubTitle,
  Title,
  Wrapper,
} from "./User.styles";

export function User(): JSX.Element {
  const { lang, currentLangKey } = useLanguage();
  const { user, authenticate } = useAuth();

  async function onSubmit(data: IUser): Promise<void> {
    const response = await UserApi.updateUser(user.id, {
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
        <Form schema={UserSchema} onSubmit={onSubmit}>
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
            <Input
              label="Orgão"
              type="text"
              name="organ"
              placeholder="DCET"
              defaultValue={user.organ}
              width={10}
            />
          </InputRow>
          <Input
            label="Telefone"
            type="text"
            name="phone"
            placeholder="+55 73 9 9123-3312"
            defaultValue={user.phone.toString()}
          />
          <Input
            label="Cargo"
            type="text"
            name="position"
            placeholder="Professor"
            defaultValue={user.position}
          />
          <Footer>
            <Button color="warning" label={"Cancelar"} />
            <Button type="submit" label={"Salvar Alterações"} />
          </Footer>
        </Form>
      </Content>
    </Wrapper>
  );
}
