import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { laboratoryService } from "service/laboratory/laboratory.service";
import { locationService } from "service/location/location.service";
import { useLaboratory } from "store/slices/laboratory/useLaboratory";

import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";
import { Select } from "components/Form/Select";
import { Modal } from "components/Modal";
import { helpers } from "utils/helpers";

import { LaboratoriesSchema } from "./Laboratories.schema";

import { type ILaboratoriesProps } from "./Laboratories.types";
import { type ILaboratory } from "global/laboratory.types";
import { type ILocation } from "global/location.types";

import { ButtonWrapper } from "./Laboratories.styles";

export function Laboratories({
  isVisible,
  toggleModal,
  onSuccess,
}: ILaboratoriesProps): JSX.Element {
  const { laboratory } = useLaboratory();
  const [locations, setLocations] = useState<ILocation[]>([]);

  async function onSubmit(newData: ILaboratory): Promise<void> {
    const { pavilion, label } = newData;
    const { data, status } = await laboratoryService.updateLaboratory(
      laboratory._id,
      {
        pavilion,
        label,
      }
    );

    if (status !== 200) {
      toast.error("Erro ao editar laboratório");
      return;
    }

    toast.success("Laboratório editado com sucesso");
    toggleModal();
    onSuccess(data);
  }

  const getLocations = async (): Promise<void> => {
    const { data } = await locationService.getLocations();
    setLocations(data);
  };

  useEffect(() => {
    getLocations().catch((err) => {
      toast.error(err.message);
    });
  }, []);

  if (helpers.isObjectEmpty(laboratory)) return <></>;

  return (
    <Modal
      title={`Editando ${laboratory.label}`}
      isVisible={isVisible}
      toggleModal={toggleModal}
    >
      <Form onSubmit={onSubmit} schema={LaboratoriesSchema}>
        <Input
          placeholder="5A"
          label="Nome"
          name="label"
          type="text"
          defaultValue={laboratory.label}
        />
        <Select
          label="Pavilhão"
          name="pavilion"
          defaultValue={{
            label:
              locations.find((c) => c._id === laboratory.pavilion._id)?.label ??
              "",
            value: laboratory.pavilion.label,
          }}
          options={locations.map((item) => {
            return {
              value: item._id,
              label: item.label,
            };
          })}
        />
        <ButtonWrapper>
          <Button
            label="Cancelar"
            color="warning"
            callback={toggleModal}
            type="button"
          />
          <Button label="Salvar" color="primary" type="submit" />
        </ButtonWrapper>
      </Form>
    </Modal>
  );
}
