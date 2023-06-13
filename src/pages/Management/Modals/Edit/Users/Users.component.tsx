import { toast } from "react-toastify";
import { userService } from "service/user/user.service";
import { useUser } from "store/slices/user/useUser";

import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";
import { Select } from "components/Form/Select";
import { Modal } from "components/Modal";

import { UsersSchema } from "./Users.schema";

import { type IUserProps } from "./Users.types";
import { type IUser, type UserType } from "global/user.types";

import { ButtonWrapper } from "./Users.styles";

export function Users({
  isVisible,
  toggleModal,
  onSuccess,
}: IUserProps): JSX.Element {
  const { user } = useUser();

  async function onSubmit(userNew: IUser): Promise<void> {
    const {
      data: { data },
      status,
    } = await userService.updateUser(user._id, userNew);

    if (status !== 200) {
      toast.error("Erro ao editar usuário");
      return;
    }

    toast.success("Usuário editado com sucesso");
    toggleModal();
    onSuccess(data);
  }

  const usersType: Record<UserType, string> = {
    admin: "Administrador",
    manager: "Gerencia",
    user: "Usuário",
  };

  const userOffice: Record<string, string> = {
    professor: "Professor",
    student: "Estudante",
    technician: "Técnico",
    other: "Outro",
  };

  return (
    <Modal
      title={`Editando usuário ${user.name}`}
      isVisible={isVisible}
      toggleModal={toggleModal}
    >
      <Form onSubmit={onSubmit} schema={UsersSchema}>
        <Input
          placeholder="email@uesc.br"
          label="Email"
          name="email"
          type="email"
          defaultValue={user.email}
        />
        <Input
          defaultValue={user.name}
          placeholder="Meu Nome"
          label="Nome"
          name="name"
          type="text"
        />
        <Input
          placeholder="2023291231"
          label="Matricula"
          name="registration"
          type="text"
          defaultValue={user.registration}
        />
        <Select
          label="Tipo de Usuário"
          name="role"
          options={Object.keys(usersType).map((type: string) => {
            return {
              label: usersType[type as UserType],
              value: type.toString(),
            };
          })}
          defaultValue={{
            label: usersType[user.role],
            value: user.role,
          }}
        />
        <Select
          label="Cargo"
          name="office"
          options={Object.keys(userOffice).map((type: string) => {
            return {
              label: userOffice[type],
              value: type.toString(),
            };
          })}
          defaultValue={{
            label: userOffice[user.office],
            value: user.office,
          }}
        />
        <ButtonWrapper>
          <Button
            label="Cancelar"
            color="warning"
            callback={toggleModal}
            type="button"
          />
          <Button label="Salvar" color="primary" type="submit" />
        </ButtonWrapper>
      </Form>
    </Modal>
  );
}
