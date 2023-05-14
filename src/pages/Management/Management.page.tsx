/* eslint-disable react/jsx-key */

import { useEffect, useState } from "react";

import { Icons } from "global/icons.constants";
import { toast } from "react-toastify";
import { Hours } from "service/hours/hours.service";

import { Button } from "components/Button";
import { Table } from "components/Table";
import { Tabs } from "components/Tabs";

import { type IHours } from "global/hours.types";

import { Header, SubTitle, Title, Wrapper } from "./Management.styles";

export function Management(): JSX.Element {
  const [hours, setHours] = useState<IHours[]>([]);

  const Actions = (rowId: number): JSX.Element => {
    return (
      <Button
        callback={async () => {
          if (window.confirm("Realmente deseja deletar este horario ?")) {
            const res = await Hours.deleteHours(hours[rowId].id);
            if (res) {
              setHours((prev) =>
                prev.filter((item) => item.id !== hours[rowId].id)
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
    const getHours = async (): Promise<void> => {
      const response = await Hours.getHours();
      setHours(response);
    };

    getHours().catch((e) => {
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
            title="Horarios Cadastrados"
            header={["Hora"]}
            actions={Actions}
            keys={["time"]}
            row={hours}
          />,
          <Table
            title="Usuários"
            header={["Laboratório", "Data", "Horario"]}
            keys={["time"]}
            actions={Actions}
            row={[]}
          />,
        ]}
        headers={["Laboratório", "Agendamentos", "Horarios", "Usuários"]}
      />
    </Wrapper>
  );
}
