import { useEffect, useState } from "react";

import { Icons } from "global/icons.constants";
import { toast } from "react-toastify";
import { infraService } from "service/infra/infra.service";
import { useInfra } from "store/slices/infra/useInfra";

import { Button } from "components/Button";
import { Table } from "components/Table";
import { useModal } from "hooks/modals.hook";

import { CreateInfraModal, EditInfraModal } from "../..";

import { type IUseInfra } from "./Infra.types";
import { type IInfra } from "global/infra.types";

export function Infra(): IUseInfra {
  const [data, setData] = useState<IInfra[]>([]);
  const { toggleModal: toggleInfra, isVisible: isVisibleInfra } = useModal();
  const { toggleModal: toggleEditInfra, isVisible: isVisibleEditInfra } =
    useModal();
  const { setInfra } = useInfra();

  // Lista dos itens da entidade
  const getInfras = async (): Promise<void> => {
    const { data } = await infraService.getInfras();
    setData(data);
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
          setData((prev) => [...prev.filter((i) => i.id !== data.id), data]);
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
              data[rowId].id ?? ""
            );
            if (status === 200) {
              setData((prev) =>
                prev.filter((item) => item.id !== data[rowId].id)
              );
              toast.success("Item deletado com sucesso!");
            } else {
              await getInfras();
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
      <Table
        headerIcon={<Icons.AddIcon onClick={toggleInfra} />}
        title="Itens de infraestrutura"
        header={["ID", "Código", "Nome"]}
        actions={Actions}
        keys={["roomId", "code", "label"]}
        row={data}
        onClickRow={(id: number) => {
          setInfra({ infra: data[id] });
          toggleEditInfra();
        }}
      />
    );
  }

  useEffect(() => {
    getInfras().catch((e) => {});
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
    table: TableList(),
  };
}
