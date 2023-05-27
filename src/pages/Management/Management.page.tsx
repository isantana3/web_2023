/* eslint-disable react/jsx-key */

import { Table } from "components/Table";
import { Tabs } from "components/Tabs";

import { UseInfraCrud, UseLaboratoriesCrud } from "./Modals";

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

  return (
    <Wrapper>
      {editInfra.modal}
      {editLab.modal}
      {createInfra.modal}
      {createLab.modal}
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
          // ! TODO
          <Table
            title="Localização"
            header={["Laboratório", "Data", "Horario"]}
            keys={["id", "time"]}
            row={[]}
          />,
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
