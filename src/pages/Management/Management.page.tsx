/* eslint-disable react/jsx-key */

import { Table } from "components/Table";
import { Tabs } from "components/Tabs";

import { UseInfraCrud } from "./Modals";

import { Header, SubTitle, Title, Wrapper } from "./Management.styles";

export function Management(): JSX.Element {
  const {
    create: createInfra,
    edit: editInfra,
    table: infraTable,
  } = UseInfraCrud();

  return (
    <Wrapper>
      {editInfra.modal}
      {createInfra.modal}
      <Header>
        <Title>Gestão</Title>
        <SubTitle>Cadastre, edite e exclua os seus módulos</SubTitle>
      </Header>
      <Tabs
        defaultTab={2}
        items={[
          // ! TODO
          <Table
            title="Laboratórios"
            header={["Laboratório", "Data", "Horario"]}
            keys={["time"]}
            row={[]}
          />,
          // ! TODO
          <Table
            title="Agendamentos"
            header={["Laboratório", "Data", "Horario"]}
            keys={["time"]}
            row={[]}
          />,
          // ? DOING
          infraTable,
          // ! TODO
          <Table
            title="Usuários"
            header={["Laboratório", "Data", "Horario"]}
            keys={["id", "time"]}
            row={[]}
          />,
        ]}
        headers={["Laboratório", "Agendamentos", "Infraestrutura", "Usuários"]}
      />
    </Wrapper>
  );
}
