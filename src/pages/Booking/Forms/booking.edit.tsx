import React from "react";

import { times } from "global/hours.constant";

import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";
import { Select } from "components/Form/Select";
import { Select as SelectCustom } from "components/Select";
import { type IOptions } from "components/Select/Select.types";

import { BookingUniqueSchema } from "../Booking.schema";

import { type IEditFormProps } from "../Booking.types";

import { ButtonWrapper, InputRow } from "../Booking.styles";

const EditForm: React.FC<IEditFormProps> = ({
  id,
  booking,
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
        defaultValue={id && booking && booking.label}
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
          defaultValue={
            id &&
            booking &&
            new Date(booking.startDate)
              .toLocaleDateString()
              .toString()
              .split("/")
              .reverse()
              .join("-")
          }
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
          defaultValue={{
            label: startDate,
            value: startDate,
          }}
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
          defaultValue={{
            label: endDate,
            value: endDate,
          }}
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
            locations
              .map((item): IOptions | undefined => {
                if (item._id === pavilion) {
                  return {
                    label: item.label,
                    value: item._id,
                  };
                }
                return undefined;
              })
              .filter((element) => element !== undefined)[0] ?? undefined
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
          defaultValue={
            laboratory.length > 0
              ? {
                  label: booking ? booking.room.label : "",
                  value: booking ? booking.room._id : "",
                }
              : undefined
          }
        />
      </InputRow>
      <Input
        disabled={isDisabled as boolean}
        placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat ab porro rem animi. Quibusdam veniam aut ipsam consequatur dolorum repudiandae aliquid harum beatae fugit dolorem hic nobis, placeat nam?m"
        type="textarea"
        label="Observação"
        name="observation"
        defaultValue={id && booking && booking.laterObservation}
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

export default EditForm;
