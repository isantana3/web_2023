import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { laboratoryService } from "service/laboratory/laboratory.service";
import { locationService } from "service/location/location.service";

import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";
import { Select } from "components/Form/Select";
import { Modal } from "components/Modal";

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
  const [locations, setLocations] = useState<ILocation[]>([]);

  async function onSubmit(newData: ILaboratory): Promise<void> {
    const { pavilion, label } = newData;
    const { data, status } = await laboratoryService.createLaboratory({
      pavilion,
      label,
    });

    if (status !== 201) {
      toast.error("Erro ao criar laboratório");
      return;
    }

    toast.success("Laboratório editar com sucesso");
    toggleModal();
    onSuccess(data);
  }

  const getLocations = async (): Promise<void> => {
    const { data } = await locationService.getLocationsNormal();
    setLocations(data);
  };

  useEffect(() => {
    getLocations().catch((err) => {
      toast.error(err.message);
    });
  }, []);

  return (
    <Modal
      title={`Criando Laboratório`}
      isVisible={isVisible}
      toggleModal={toggleModal}
    >
      <Form onSubmit={onSubmit} schema={LaboratoriesSchema}>
        <Input placeholder="6A" label="Nome" name="label" type="text" />
        <Select
          label="Localização"
          name="pavilion"
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
