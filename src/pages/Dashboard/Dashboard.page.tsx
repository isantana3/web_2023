import { useAuth } from "store/slices/auth/useAuth";

import { Pagination } from "components/Pagination";
import { Table } from "components/Table";

import { Header, SubTitle, Title, Wrapper } from "./Dashboard.styles";

export function Dashboard(): JSX.Element {
  const { user } = useAuth();

  const Actions = (rowId: string): JSX.Element => {
    return (
      <button
        onClick={() => {
          alert(rowId);
        }}
      >
        Reservar
      </button>
    );
  };

  return (
    <Wrapper>
      <Header>
        <Title>Olá, Isabelle!</Title>
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
