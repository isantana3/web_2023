/* eslint-disable react/jsx-key */

import { Table } from "components/Table";
import { Tabs } from "components/Tabs";

import { UseInfraCrud, UseLaboratoriesCrud, UseLocationsCrud } from "./Modals";

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

  return (
    <Wrapper>
      {editInfra.modal}
      {editLab.modal}
      {editLocations.modal}
      {createInfra.modal}
      {createLab.modal}
      {createLocations.modal}
      <Header>
        <Title>Gestão</Title>
        <SubTitle>Cadastre, edite e exclua os seus módulos</SubTitle>
      </Header>
      <Tabs
        defaultTab={0}
        items={[
          labTable,
          // ! TODO
          <Table
            title="Agendamentos"
            header={["Laboratório", "Data", "Horario"]}
            keys={["time"]}
            row={[]}
          />,
          infraTable,
          // ! TODO
          <Table
            title="Usuários"
            header={["Laboratório", "Data", "Horario"]}
            keys={["id", "time"]}
            row={[]}
          />,
          locationsTable,
        ]}
        headers={[
          "Laboratórios",
          "Agendamentos",
          "Infraestrutura",
          "Usuários",
          "Localização",
        ]}
      />
    </Wrapper>
  );
}
