import { useEffect, useState } from "react";

import { Icons } from "global/icons.constants";
import { toast } from "react-toastify";
import { locationService } from "service/location/location.service";
import { useLocation } from "store/slices/location/useLocation";

import { Button } from "components/Button";
import { Table } from "components/Table";
import { useModal } from "hooks/modals.hook";

import { CreateLocationsModal, EditLocationsModal } from "../..";

import { type IUseLocations } from "./locations.types";
import { type ILocation } from "global/location.types";

export function Locations(): IUseLocations {
  const [data, setData] = useState<ILocation[]>([]);
  const { toggleModal: toggleLocation, isVisible: isVisibleLocation } =
    useModal();
  const { toggleModal: toggleEditLocation, isVisible: isVisibleEditLocation } =
    useModal();
  const { setLocation } = useLocation();

  // Lista dos itens da entidade
  const getLocations = async (): Promise<void> => {
    const { data } = await locationService.getLocations();
    setData(data);
  };

  // Modal de criação da entidade
  const CreateModal = (): JSX.Element => {
    return (
      <CreateLocationsModal
        onSuccess={(data: ILocation) => {
          setData((prev) => [...prev, data]);
        }}
        isVisible={isVisibleLocation}
        toggleModal={toggleLocation}
      />
    );
  };

  // Modal de edição da entidade
  function EditModal(): JSX.Element {
    return (
      <EditLocationsModal
        onSuccess={(data: ILocation) => {
          setData((prev) => [...prev.filter((i) => i._id !== data._id), data]);
        }}
        isVisible={isVisibleEditLocation}
        toggleModal={toggleEditLocation}
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
            const { status } = await locationService.deleteLocation(
              data[rowId]._id
            );
            if (status === 200) {
              setData((prev) =>
                prev.filter((item) => item._id !== data[rowId]._id)
              );
              toast.success("Localização deletada com sucesso!");
            } else {
              await getLocations();
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
        headerIcon={<Icons.AddIcon onClick={toggleLocation} />}
        title="Pavilhões"
        header={["ID", "Pavilhão", "Descrição", "Observação"]}
        actions={Actions}
        keys={["_id", "label", "description", "observation"]}
        row={data}
        onClickRow={(id: number) => {
          setLocation({ locations: data[id] });
          toggleEditLocation();
        }}
      />
    );
  }

  useEffect(() => {
    getLocations().catch((e) => {});
  }, []);

  return {
    create: {
      hook: {
        toggleModal: toggleLocation,
        isVisible: isVisibleLocation,
      },
      modal: CreateModal(),
    },
    edit: {
      hook: {
        toggleModal: toggleEditLocation,
        isVisible: isVisibleEditLocation,
      },
      modal: EditModal(),
    },
    data,
    table: TableList(),
  };
}
