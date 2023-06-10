/* eslint-disable react/jsx-key */

import { Icons } from "global/icons.constants";
import { useNavigate } from "react-router-dom";
import { useAuth } from "store/slices/auth/useAuth";

import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";
import { LaboratoryTag } from "components/LaboratoryTag";
import { Modal } from "components/Modal";
import { ModalFooter } from "components/Modal/Modal.styles";
import { Table } from "components/Table";
import { Tooltip } from "components/Tooltip";
import { useModal } from "hooks/modals.hook";

import { DashboardSchema } from "./example.schema";

import {
  Header,
  LaboratoryItem,
  LaboratoryItemSubTitle,
  LaboratoryItemTitle,
  SubTitle,
  Title,
  Wrapper,
} from "./Dashboard.styles";

export function Dashboard(): JSX.Element {
  const { user } = useAuth();

  const Actions = (rowId: string): JSX.Element => {
    return <Icons.EditIcon />;
  };

  const { isVisible, toggleModal } = useModal();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Modal
        title="Criar usuário"
        isVisible={isVisible}
        toggleModal={toggleModal}
      >
        <Form schema={DashboardSchema} onSubmit={(data) => {}}>
          <Input
            label="Email"
            type="text"
            name="email"
            placeholder="smvasconcelos11@gmail.com"
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
        <SubTitle>Suas últimas atividades podem ser vistas abaixo </SubTitle>
      </Header>
      <Table
        headerIcon={
          <Button
            callback={() => {
              navigate("/reserva");
            }}
            label="Nova Reserva"
          />
        }
        title="Suas reservas"
        header={["Laboratório", "Status", ""]}
        actions={Actions}
        keys={["laboratory", "status", "action"]}
        row={[
          {
            laboratory: (
              <LaboratoryItem>
                <Icons.LaboratoryIcon />
                <div>
                  <LaboratoryItemTitle>Lab 4A</LaboratoryItemTitle>
                  <LaboratoryItemSubTitle>
                    Ter/Qui 9:10 - 10:50
                  </LaboratoryItemSubTitle>
                </div>
              </LaboratoryItem>
            ),
            status: <LaboratoryTag status="REJECTED" label="Indisponível" />,
            action: (
              <Button
                label="Cancelar"
                color="transparent"
                icon={<Icons.CloseIcon />}
              />
            ),
          },
          {
            laboratory: (
              <LaboratoryItem>
                <Icons.LaboratoryIcon />
                <div>
                  <LaboratoryItemTitle>Lab 4A</LaboratoryItemTitle>
                  <LaboratoryItemSubTitle>
                    Ter/Qui 9:10 - 10:50
                  </LaboratoryItemSubTitle>
                </div>
              </LaboratoryItem>
            ),
            status: <LaboratoryTag status="PENDING" label="Pendente" />,
            action: (
              <Button
                label="Cancelar"
                color="transparent"
                icon={<Icons.CloseIcon />}
              />
            ),
          },
          {
            laboratory: (
              <LaboratoryItem>
                <Icons.LaboratoryIcon />
                <div>
                  <LaboratoryItemTitle>Lab 4A</LaboratoryItemTitle>
                  <LaboratoryItemSubTitle>
                    Ter/Qui 9:10 - 10:50
                  </LaboratoryItemSubTitle>
                </div>
              </LaboratoryItem>
            ),
            status: <LaboratoryTag status="CONFIRMED" label="Confirmado" />,
            action: (
              <Button
                label="Cancelar"
                color="transparent"
                icon={<Icons.CloseIcon />}
              />
            ),
          },
        ]}
      />
    </Wrapper>
  );
}
