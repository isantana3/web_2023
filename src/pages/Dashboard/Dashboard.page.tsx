/* eslint-disable react/jsx-key */
import { useEffect } from "react";

import { Icons } from "global/icons.constants";
import { toast } from "react-toastify";
import { useAuth } from "store/slices/auth/useAuth";

import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";
import { Modal } from "components/Modal";
import { ModalFooter } from "components/Modal/Modal.styles";
import { Pagination } from "components/Pagination";
import { Table } from "components/Table";
import { Tabs } from "components/Tabs";
import { Tooltip } from "components/Tooltip";
import { useModal } from "hooks/modals.hook";

import { DashboardSchema } from "./example.schema";

import { Header, SubTitle, Title, Wrapper } from "./Dashboard.styles";

export function Dashboard(): JSX.Element {
  const { user } = useAuth();

  const Actions = (rowId: string): JSX.Element => {
    return (
      <Button
        callback={() => {
          alert(rowId);
        }}
        label="Reservar"
        icon={<Icons.BulletinNewIcon />}
      />
    );
  };

  useEffect(() => {
    toast.success("Bem vindo " + user.name);
  }, []);

  const { isVisible, toggleModal } = useModal();

  return (
    <Wrapper>
      <Modal
        title="Criar usuário"
        isVisible={isVisible}
        toggleModal={toggleModal}
      >
        <Form
          schema={DashboardSchema}
          onSubmit={(data) => {
            console.log(data);
          }}
        >
          <Input
            label="Email"
            type="text"
            name="email"
            placeholder="smvasconcelos11@gmai.com"
          />
          <Input
            label="Senha"
            type="textarea"
            name="password"
            placeholder="*******"
          />
          <ModalFooter>{Actions("1")}</ModalFooter>
        </Form>
      </Modal>
      <Header>
        <Tooltip label="Clique para abrir o modal" position="right">
          <Title onClick={toggleModal}>Olá, {user.name}!</Title>
        </Tooltip>
        <SubTitle>
          Welcome back to your all in Dashboard and more text here!
        </SubTitle>
      </Header>
      <Tabs
        items={[
          <Table
            title="Laboratórios"
            header={["Laboratório", "Data", "Horario"]}
            actions={Actions}
            row={[["Lab 6A", "Oct, 03, 2022", "13:30 - 18:30"]]}
          />,
          <Table
            title="Agendamentos"
            header={["Laboratório", "Data", "Horario"]}
            actions={Actions}
            row={[
              ["Lab 6A", "Oct, 03, 2022", "13:30 - 18:30"],
              ["Lab 6A", "Oct, 03, 2022", "13:30 - 18:30"],
            ]}
          />,
          <Table
            title="Horarios"
            header={["Laboratório", "Data", "Horario"]}
            actions={Actions}
            row={[
              ["Lab 6A", "Oct, 03, 2022", "13:30 - 18:30"],
              ["Lab 6A", "Oct, 03, 2022", "13:30 - 18:30"],
              ["Lab 6A", "Oct, 03, 2022", "13:30 - 18:30"],
            ]}
          />,
          <Table
            title="Usuários"
            header={["Laboratório", "Data", "Horario"]}
            actions={Actions}
            row={[
              ["Lab 6A", "Oct, 03, 2022", "13:30 - 18:30"],
              ["Lab 6A", "Oct, 03, 2022", "13:30 - 18:30"],
              ["Lab 6A", "Oct, 03, 2022", "13:30 - 18:30"],
              ["Lab 6A", "Oct, 03, 2022", "13:30 - 18:30"],
            ]}
          />,
        ]}
        headers={["Laboratório", "Agendamentos", "Horarios", "Usuários"]}
      />

      <Pagination
        currentPage={10}
        totalPages={20}
        setPage={(id: number) => {
          console.log(id);
        }}
      />
    </Wrapper>
  );
}
