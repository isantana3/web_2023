/* eslint-disable react/jsx-key */

import { useEffect, useState } from "react";

import { Icons } from "global/icons.constants";
import { toast } from "react-toastify";
import { Infra } from "service/infra/infra.service";

import { Button } from "components/Button";
import { Table } from "components/Table";
import { Tabs } from "components/Tabs";

import { type IInfra } from "global/infra.types";

import { Header, SubTitle, Title, Wrapper } from "./Management.styles";

export function Management(): JSX.Element {
  const [infra, setInfra] = useState<IInfra[]>([]);

  const Actions = (rowId: number): JSX.Element => {
    return (
      <Button
        callback={async () => {
          if (window.confirm("Realmente deseja deletar este horario ?")) {
            const res = await Infra.deleteInfra(infra[rowId].id);
            if (res) {
              setInfra((prev) =>
                prev.filter((item) => item.id !== infra[rowId].id)
              );
            }
          }
        }}
        label="Deletar"
        icon={<Icons.CloseIcon color="#fff" />}
      />
    );
  };

  useEffect(() => {
    const getInfras = async (): Promise<void> => {
      const response = await Infra.getInfras();
      setInfra(response);
    };

    getInfras().catch((e) => {
      toast.error("Erro carregando os horarios.");
    });
  }, []);

  return (
    <Wrapper>
      <Header>
        <Title>Gestão</Title>
        <SubTitle>Cadastre, edite e exclua os seus módulos</SubTitle>
      </Header>
      <Tabs
        defaultTab={2}
        items={[
          <Table
            title="Laboratórios"
            header={["Laboratório", "Data", "Horario"]}
            actions={Actions}
            keys={["time"]}
            row={[]}
          />,
          <Table
            title="Agendamentos"
            header={["Laboratório", "Data", "Horario"]}
            keys={["time"]}
            actions={Actions}
            row={[]}
          />,
          <Table
            title="Itens de infraestrutura"
            header={["ID", "Código", "Nome"]}
            actions={Actions}
            keys={["id", "cod", "nome"]}
            row={infra}
          />,
          <Table
            title="Usuários"
            header={["Laboratório", "Data", "Horario"]}
            keys={["id", "time"]}
            actions={Actions}
            row={[]}
          />,
        ]}
        headers={["Laboratório", "Agendamentos", "Infraestrutura", "Usuários"]}
      />
    </Wrapper>
  );
}
