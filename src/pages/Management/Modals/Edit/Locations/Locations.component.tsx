import { toast } from "react-toastify";
import { locationService } from "service/location/location.service";
import { useLocation } from "store/slices/location/useLocation";

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
  const { locations } = useLocation();

  async function onSubmit(newData: ILocation): Promise<void> {
    const { label } = newData;
    const { data, status } = await locationService.updateLocation(
      locations.id ?? "",
      {
        label,
      }
    );

    if (status !== 200) {
      toast.error("Erro ao editar localização");
      return;
    }

    toast.success("Localização editado com sucesso");
    toggleModal();
    onSuccess(data);
  }

  return (
    <Modal
      title={`Editando item ${locations.label}`}
      isVisible={isVisible}
      toggleModal={toggleModal}
    >
      <Form onSubmit={onSubmit} schema={LocationsSchema}>
        <Input
          placeholder="Parvilhão de exatas"
          label="Localização"
          name="label"
          type="text"
          defaultValue={locations.label}
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
