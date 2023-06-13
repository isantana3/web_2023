import { useEffect, useState } from "react";

import { Icons } from "global/icons.constants";
import { toast } from "react-toastify";
import { infraService } from "service/infra/infra.service";
import { useInfra } from "store/slices/infra/useInfra";

import { Button } from "components/Button";
import { Pagination } from "components/Pagination";
import { type IPagination } from "components/Pagination/Pagination.types";
import { Table } from "components/Table";
import { useModal } from "hooks/modals.hook";
import { helpers } from "utils/helpers";

import { CreateInfraModal, EditInfraModal } from "../..";

import { type IUseInfra } from "./Infra.types";
import { type IInfra } from "global/infra.types";

export function Infra(): IUseInfra {
  const [data, setData] = useState<IInfra[]>([]);
  const [page, setPage] = useState<IPagination>({
    page: 1,
    totalPages: 1,
    limit: 2,
  });
  const { toggleModal: toggleInfra, isVisible: isVisibleInfra } = useModal();
  const { toggleModal: toggleEditInfra, isVisible: isVisibleEditInfra } =
    useModal();
  const { setInfra } = useInfra();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Lista dos itens da entidade
  const getInfras = async (page: IPagination): Promise<void> => {
    setIsLoading(true);
    const {
      data: { data, lastPage },
    } = await infraService.getInfras(page);
    setData(data);
    setPage({
      page: page.page,
      totalPages: helpers.getLastPage(lastPage),
      limit: 2,
    });
    setIsLoading(false);
  };

  // Modal de criação da entidade
  const CreateModal = (): JSX.Element => {
    return (
      <CreateInfraModal
        onSuccess={(data: IInfra) => {
          setData((prev) => [...prev, data]);
        }}
        isVisible={isVisibleInfra}
        toggleModal={toggleInfra}
      />
    );
  };

  // Modal de edição da entidade
  function EditModal(): JSX.Element {
    return (
      <EditInfraModal
        onSuccess={(data: IInfra) => {
          setData((prev) => [...prev.filter((i) => i._id !== data._id), data]);
        }}
        isVisible={isVisibleEditInfra}
        toggleModal={toggleEditInfra}
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
            window.confirm(`Realmente deseja deletar ${data[rowId].code} ?`)
          ) {
            const { status } = await infraService.deleteInfra(
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
  const table = (
    <div>
      <Table
        headerIcon={<Icons.AddIcon onClick={toggleInfra} />}
        title="Itens de infraestrutura"
        header={["Código", "Laboratório", "Nome"]}
        actions={Actions}
        keys={["code", "room.label", "label"]}
        row={data}
        onClickRow={(id: number) => {
          setInfra({ infra: data[id] });
          toggleEditInfra();
        }}
        isLoading={isLoading}
      />
      <Pagination page={page} setPage={getInfras} />
    </div>
  );

  useEffect(() => {
    getInfras(page).catch((e) => {});
  }, []);

  return {
    create: {
      hook: {
        toggleModal: toggleInfra,
        isVisible: isVisibleInfra,
      },
      modal: CreateModal(),
    },
    edit: {
      hook: {
        toggleModal: toggleEditInfra,
        isVisible: isVisibleEditInfra,
      },
      modal: EditModal(),
    },
    data,
    table,
  };
}
