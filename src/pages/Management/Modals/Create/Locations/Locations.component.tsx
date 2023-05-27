import { toast } from "react-toastify";
import { locationService } from "service/location/location.service";

import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";
import { Modal } from "components/Modal";

import { LocationsSchema } from "./Locations.schema";

import { type ILaboratoriesProps } from "./Locations.types";
import { type ILocation } from "global/location.types";

import { ButtonWrapper } from "./Locations.styles";

export function Locations({
  isVisible,
  toggleModal,
  onSuccess,
}: ILaboratoriesProps): JSX.Element {
  async function onSubmit(newData: ILocation): Promise<void> {
    const { label } = newData;
    const { data, status } = await locationService.createLocation({
      label,
    });

    if (status !== 201) {
      toast.error("Erro ao criar localização");
      return;
    }

    toast.success("Localização criada com sucesso");
    toggleModal();
    onSuccess(data);
  }

  return (
    <Modal
      title={`Criando Localização`}
      isVisible={isVisible}
      toggleModal={toggleModal}
    >
      <Form onSubmit={onSubmit} schema={LocationsSchema}>
        <Input
          placeholder="Parvilhão de exatas"
          label="Localização"
          name="label"
          type="text"
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
