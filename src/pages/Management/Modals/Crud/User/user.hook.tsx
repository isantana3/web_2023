import { useEffect, useState } from "react";

import { Icons } from "global/icons.constants";
import { toast } from "react-toastify";
import { userService } from "service/user/user.service";
import { useUser } from "store/slices/user/useUser";

import { Button } from "components/Button";
import { Pagination } from "components/Pagination";
import { Table } from "components/Table";
import { useModal } from "hooks/modals.hook";

import { CreateUsersModal, EditUsersModal } from "../..";

import { type IUseUser } from "./user.types";
import { type IUser } from "global/user.types";

export function Users(): IUseUser {
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<IUser[]>([]);
  const { toggleModal: toggleUsers, isVisible: isVisibleUsers } = useModal();
  const { toggleModal: toggleEditUsers, isVisible: isVisibleEditUsers } =
    useModal();
  const { setUser } = useUser();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Lista dos itens da entidade
  const getUsers = async (page: number): Promise<void> => {
    const {
      data: { data },
    } = await userService.getUsers({ page, limit: 2 });
    setData(data);
    setIsLoading(false);
  };

  // Modal de criação da entidade
  const CreateModal = (): JSX.Element => {
    return (
      <CreateUsersModal
        onSuccess={(data: IUser) => {
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
              setPage(1);
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
        <Pagination currentPage={page} setPage={setPage} totalPages={2} />
      </div>
    );
  }

  useEffect(() => {
    setIsLoading(true);
    getUsers(page).catch((e) => {});
  }, [page]);

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
