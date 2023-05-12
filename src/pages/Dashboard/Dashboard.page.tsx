import { useEffect } from "react";

import { Icons } from "global/icons.constants";
import { toast } from "react-toastify";
import { useAuth } from "store/slices/auth/useAuth";

import { Button } from "components/Button";
import { Pagination } from "components/Pagination";
import { Table } from "components/Table";

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

  return (
    <Wrapper>
      <Header>
        <Title>Olá, {user.name}!</Title>
        <SubTitle>
          Welcome back to your all in Dashboard and more text here!
        </SubTitle>
      </Header>
      <Table
        title="Suas reservas"
        header={["Laboratório", "Data", "Horario"]}
        actions={Actions}
        row={[
          ["Lab 6A", "Oct, 03, 2022", "13:30 - 18:30"],
          ["Lab 6A", "Oct, 03, 2022", "13:30 - 18:30"],
          ["Lab 6A", "Oct, 03, 2022", "13:30 - 18:30"],
          ["Lab 6A", "Oct, 03, 2022", "13:30 - 18:30"],
          ["Lab 6A", "Oct, 03, 2022", "13:30 - 18:30"],
          ["Lab 6A", "Oct, 03, 2022", "13:30 - 18:30"],
          ["Lab 6A", "Oct, 03, 2022", "13:30 - 18:30"],
        ]}
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
