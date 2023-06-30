import React from "react";

import { times } from "global/hours.constant";

import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";
import { Select } from "components/Form/Select";
import { Select as SelectCustom } from "components/Select";
import { type IOptions } from "components/Select/Select.types";

import { BookingUniqueSchema } from "../Booking.schema";

import { type ICreateFormProps } from "../Booking.types";

import { ButtonWrapper, InputRow } from "../Booking.styles";

const CreateForm: React.FC<ICreateFormProps> = ({
  isDisabled,
  startDate,
  endDate,
  pavilion,
  laboratory,
  locations,
  navigate,
  setDate,
  setStartDate,
  setEndDate,
  setPavilion,
  onSubmit,
}) => {
  return (
    <Form schema={BookingUniqueSchema} onSubmit={onSubmit}>
      <Input
        disabled={isDisabled as boolean}
        name="label"
        type="text"
        label="Descrição"
        placeholder="Aula de LP2"
      />
      <InputRow>
        <Input
          disabled={isDisabled as boolean}
          onChange={(val: KeyboardEvent) => {
            setDate((val.currentTarget as HTMLInputElement).value);
          }}
          width={50}
          name="dateStart"
          type="date"
          label="Data Inicial"
          placeholder="09/12/1998"
        />
        <Select
          disabled={isDisabled as boolean}
          options={times}
          name="hourStart"
          label={"Horario de Inicio"}
          placeholder="07:30"
          onClick={(val: string | undefined | number) => {
            setStartDate(val as string);
          }}
          defaultValue={
            startDate
              ? {
                  label: startDate,
                  value: startDate,
                }
              : undefined
          }
        />

        <Select
          disabled={isDisabled as boolean}
          options={times}
          name="hourEnd"
          label={"Horario de Termino"}
          placeholder="08:20"
          onClick={(val: string | undefined | number) => {
            setEndDate(val as string);
          }}
          defaultValue={
            endDate
              ? {
                  label: endDate,
                  value: endDate,
                }
              : undefined
          }
        />
        <SelectCustom
          disabled={isDisabled as boolean}
          onChange={(value: IOptions) => {
            setPavilion(value.value as string);
          }}
          options={
            locations?.map((item) => {
              return {
                label: item.label,
                value: item._id,
              };
            }) ?? []
          }
          label="Pavilhão"
          defaultValue={
            locations?.map((item): IOptions | undefined => {
              if (item._id === pavilion) {
                return {
                  label: item.label,
                  value: item._id,
                };
              }
              return undefined;
            })[0] ?? undefined
          }
        />
        <Select
          label="Laboratório"
          name="laboratory"
          disabled={laboratory.length === 0}
          options={laboratory.map((item) => {
            return {
              value: item._id,
              label: item.label,
            };
          })}
        />
      </InputRow>
      <Input
        disabled={isDisabled as boolean}
        placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat ab porro rem animi. Quibusdam veniam aut ipsam consequatur dolorum repudiandae aliquid harum beatae fugit dolorem hic nobis, placeat nam?m"
        type="textarea"
        label="Observação"
        name="observation"
      />
      <ButtonWrapper>
        <Button
          label="Cancelar"
          color="warning"
          type="button"
          callback={() => {
            navigate("/reservas");
          }}
        />
        <Button label="Salvar" color="primary" type="submit" />
      </ButtonWrapper>
    </Form>
  );
};

export default CreateForm;
