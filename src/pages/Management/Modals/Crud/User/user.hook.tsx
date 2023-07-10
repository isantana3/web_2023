import { useEffect, useState } from "react";

import { paginationLimit } from "global/constants";
import { Icons } from "global/icons.constants";
import { toast } from "react-toastify";
import { userService } from "service/user/user.service";
import { useUser } from "store/slices/user/useUser";

import { Button } from "components/Button";
import { Pagination } from "components/Pagination";
import { type IPagination } from "components/Pagination/Pagination.types";
import { Table } from "components/Table";
import { userOffice, usersType } from "components/UserType/UserType.component";
import { useModal } from "hooks/modals.hook";

import { CreateUsersModal, EditUsersModal } from "../..";

import { type IUseUser } from "./user.types";
import { type IUser, type UserType } from "global/user.types";

export function Users(): IUseUser {
  const [page, setPage] = useState<IPagination>({
    page: 1,
    totalPages: 1,
    limit: paginationLimit,
  });
  const [data, setData] = useState<IUser[]>([]);
  const { toggleModal: toggleUsers, isVisible: isVisibleUsers } = useModal();
  const { toggleModal: toggleEditUsers, isVisible: isVisibleEditUsers } =
    useModal();
  const { setUser } = useUser();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Lista dos itens da entidade
  const getUsers = async (page: IPagination): Promise<void> => {
    setIsLoading(true);
    const {
      data: { data, lastPage },
    } = await userService.getUsers(page);
    setPage({
      page: page.page,
      totalPages: lastPage,
      limit: paginationLimit,
    });
    setData(
      data.map((data) => {
        data.role = usersType[data.role] as UserType;
        data.office = userOffice[data.office];
        return data;
      })
    );
    setIsLoading(false);
  };

  // Modal de criação da entidade
  const CreateModal = (): JSX.Element => {
    return (
      <CreateUsersModal
        onSuccess={(data: IUser) => {
          data.role = usersType[data.role] as UserType;
          data.office = userOffice[data.office];
          setData((prev) => [...prev, data]);
        }}
        isVisible={isVisibleUsers}
        toggleModal={toggleUsers}
      />
    );
  };

  // Modal de edição da entidade
  function EditModal(): JSX.Element {
    return (
      <EditUsersModal
        onSuccess={(data: IUser) => {
          data.role = usersType[data.role] as UserType;
          data.office = userOffice[data.office];
          setData((prev) => [...prev.filter((i) => i._id !== data._id), data]);
        }}
        isVisible={isVisibleEditUsers}
        toggleModal={toggleEditUsers}
      />
    );
  }

  // Ações da tabela
  const Actions = (rowId: number): JSX.Element => {
    return (
      <Button
        callback={async (e) => {
          e.stopPropagation();
          if (
            window.confirm(
              `Realmente deseja desativar o usuário ${data[rowId].name} ?`
            )
          ) {
            const { status } = await userService.deleteUser(
              data[rowId]._id ?? ""
            );
            if (status === 200) {
              setData((prev) =>
                prev.filter((item) => item._id !== data[rowId]._id)
              );
              toast.success("Item deletado com sucesso!");
            } else {
              await getUsers({
                page: 1,
                limit: paginationLimit,
                totalPages: 1,
              });
            }
          }
        }}
        label="Deletar"
        icon={<Icons.CloseIcon color="#fff" />}
      />
    );
  };

  // Tabela com listagem da entidade
  function TableList(): JSX.Element {
    return (
      <div>
        <Table
          headerIcon={<Icons.AddIcon onClick={toggleUsers} />}
          title="Itens de infraestrutura"
          header={["ID", "Nome", "Matricula", "Cargo", "Tipo de Usuário"]}
          actions={Actions}
          keys={["_id", "name", "registration", "office", "role"]}
          row={data}
          onClickRow={(id: number) => {
            setUser({ user: data[id] });
            toggleEditUsers();
          }}
          isLoading={isLoading}
        />
        <Pagination page={page} setPage={getUsers} />
      </div>
    );
  }

  useEffect(() => {
    getUsers(page).catch((e) => {});
  }, []);

  return {
    create: {
      hook: {
        toggleModal: toggleUsers,
        isVisible: isVisibleUsers,
      },
      modal: CreateModal(),
    },
    edit: {
      hook: {
        toggleModal: toggleEditUsers,
        isVisible: isVisibleEditUsers,
      },
      modal: EditModal(),
    },
    data,
    table: TableList(),
  };
}
