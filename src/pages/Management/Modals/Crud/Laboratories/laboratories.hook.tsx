import { useEffect, useState } from "react";

import { Icons } from "global/icons.constants";
import { toast } from "react-toastify";
import { laboratoryService } from "service/laboratory/laboratory.service";
import { useLaboratory } from "store/slices/laboratory/useLaboratory";

import { Button } from "components/Button";
import { Table } from "components/Table";
import { useModal } from "hooks/modals.hook";

import { CreateLaboratoriesModal, EditLaboratoriesModal } from "../..";

import { type IUseLaboratories } from "./laboratories.types";
import { type ILaboratory } from "global/laboratory.types";

export function Laboratories(): IUseLaboratories {
  const [data, setData] = useState<ILaboratory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { toggleModal: toggleLaboratory, isVisible: isVisibleLaboratory } =
    useModal();
  const {
    toggleModal: toggleEditLaboratory,
    isVisible: isVisibleEditLaboratory,
  } = useModal();
  const { setLaboratory } = useLaboratory();

  // Lista dos itens da entidade
  const getLaboratories = async (): Promise<void> => {
    const { data } = await laboratoryService.getLaboratories();
    setData(data);
    setIsLoading(false);
  };

  // Modal de criação da entidade
  const CreateModal = (): JSX.Element => {
    return (
      <CreateLaboratoriesModal
        onSuccess={(data: ILaboratory) => {
          setData((prev) => [...prev, data]);
        }}
        isVisible={isVisibleLaboratory}
        toggleModal={toggleLaboratory}
      />
    );
  };

  // Modal de edição da entidade
  function EditModal(): JSX.Element {
    return (
      <EditLaboratoriesModal
        onSuccess={(data: ILaboratory) => {
          setData((prev) => [...prev.filter((i) => i._id !== data._id), data]);
        }}
        isVisible={isVisibleEditLaboratory}
        toggleModal={toggleEditLaboratory}
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
            window.confirm(`Realmente deseja deletar ${data[rowId].label} ?`)
          ) {
            const { status } = await laboratoryService.deleteLaboratory(
              data[rowId]._id ?? ""
            );
            if (status === 200) {
              setData((prev) =>
                prev.filter((item) => item._id !== data[rowId]._id)
              );
              toast.success("Laboratório deletado com sucesso!");
            } else {
              await getLaboratories();
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
        headerIcon={<Icons.AddIcon onClick={toggleLaboratory} />}
        title="Laboratórios"
        header={["ID", "Nome", "Pavilhão"]}
        actions={Actions}
        keys={["_id", "label", "pavilion.label"]}
        row={data}
        onClickRow={(id: number) => {
          setLaboratory({ laboratory: data[id] });
          toggleEditLaboratory();
        }}
        isLoading={isLoading}
      />
    );
  }

  useEffect(() => {
    getLaboratories().catch((e) => {});
  }, []);

  return {
    create: {
      hook: {
        toggleModal: toggleLaboratory,
        isVisible: isVisibleLaboratory,
      },
      modal: CreateModal(),
    },
    edit: {
      hook: {
        toggleModal: toggleEditLaboratory,
        isVisible: isVisibleEditLaboratory,
      },
      modal: EditModal(),
    },
    data,
    table: TableList(),
  };
}
