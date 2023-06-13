/* eslint-disable react/jsx-key */

import { Tabs } from "components/Tabs";

import { Bookings } from "./Bookings/Bookings.component";
import {
  UseInfraCrud,
  UseLaboratoriesCrud,
  UseLocationsCrud,
  UseUsersCrud,
} from "./Modals";

import { Header, SubTitle, Title, Wrapper } from "./Management.styles";

export function Management(): JSX.Element {
  const {
    create: createInfra,
    edit: editInfra,
    table: infraTable,
  } = UseInfraCrud();

  const {
    create: createLab,
    edit: editLab,
    table: labTable,
  } = UseLaboratoriesCrud();

  const {
    create: createLocations,
    edit: editLocations,
    table: locationsTable,
  } = UseLocationsCrud();

  const {
    create: createUsers,
    edit: editUsers,
    table: usersTable,
  } = UseUsersCrud();

  return (
    <Wrapper>
      {editInfra.modal}
      {editLab.modal}
      {editLocations.modal}
      {editUsers.modal}
      {createInfra.modal}
      {createLab.modal}
      {createLocations.modal}
      {createUsers.modal}
      <Header>
        <Title>Gestão</Title>
        <SubTitle>Cadastre, edite e exclua os seus módulos</SubTitle>
      </Header>
      <Tabs
        defaultTab={1}
        items={[labTable, <Bookings />, infraTable, usersTable, locationsTable]}
        headers={[
          "Laboratórios",
          "Agendamentos",
          "Infraestrutura",
          "Usuários",
          "Pavilhões",
        ]}
      />
    </Wrapper>
  );
}
