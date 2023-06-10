import { useEffect, useState } from "react";

import { days, times } from "global/hours.constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { laboratoryService } from "service/laboratory/laboratory.service";

import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";
import { Select } from "components/Form/Select";
import { Tabs } from "components/Tabs";

import { BookingSchema } from "./Booking.schema";

import { type ILaboratory } from "global/laboratory.types";

import {
  ButtonWrapper,
  Content,
  Header,
  InputRow,
  SubTitle,
  Title,
  Wrapper,
} from "./Booking.styles";

export function Booking(): JSX.Element {
  const { id } = useParams();
  const [laboratory, setLaboratory] = useState<ILaboratory[]>([]);
  const navigate = useNavigate();
  const getLaboratories = async (): Promise<void> => {
    const { data } = await laboratoryService.getLaboratoriesNormal();
    setLaboratory(data);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any): Promise<void> => {
    // console.log(data);
  };

  useEffect(() => {
    getLaboratories().catch((err) => {
      toast.error(err.message);
    });
  }, []);

  // Editar
  if (id) {
    return (
      <Wrapper>
        <h1>Booking {id}</h1>
      </Wrapper>
    );
  }

  const uniqueReservation = (
    <Content>
      <Form schema={BookingSchema} onSubmit={onSubmit}>
        <InputRow>
          <Input
            width={50}
            name="date_init"
            type="date"
            label="Data Inicial"
            placeholder="09/12/1998"
          />
          <Select
            options={times}
            name="hour_init"
            label={"Horario de Inicio"}
            placeholder="07:30"
          />
          <Select
            options={times}
            name="hour_end"
            label={"Horario de Termino"}
            placeholder="08:20"
          />
          <Select
            label="Laboratório"
            name="laboratory"
            options={laboratory.map((item) => {
              return {
                value: item._id,
                label: `${item.label} - ${item.pavilion.label}`,
              };
            })}
          />
        </InputRow>
        <Input
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
    </Content>
  );

  const semestralReservation = (
    <Content>
      <Form schema={BookingSchema} onSubmit={onSubmit}>
        <h1>Primeiro Dia</h1>
        <InputRow>
          <Select
            options={days}
            name="day_1"
            label={"Dia da Semana"}
            placeholder="Sabado"
            defaultValue={{
              label: "Segunda-Feira",
              value: 0,
            }}
          />
          <Select
            options={times}
            name="hour_init_1"
            label={"Horario de Inicio"}
            placeholder="07:30"
          />
          <Select
            options={times}
            name="hour_end_2"
            label={"Horario de Termino"}
            placeholder="08:20"
          />
          <Select
            label="Laboratório"
            name="laboratory"
            options={laboratory.map((item) => {
              return {
                value: item._id,
                label: `${item.label} - ${item.pavilion.label}`,
              };
            })}
          />
        </InputRow>
        <h1>Segundo Dia</h1>
        <InputRow>
          <Select
            options={days}
            name="days"
            label={"Dia da Semana"}
            placeholder="Sabado"
            defaultValue={{
              label: "Segunda-Feira",
              value: 0,
            }}
          />
          <Select
            options={times}
            name="hour_init"
            label={"Horario de Inicio"}
            placeholder="07:30"
          />
          <Select
            options={times}
            name="hour_end"
            label={"Horario de Termino"}
            placeholder="08:20"
          />
          <Select
            label="Laboratório"
            name="laboratory"
            options={laboratory.map((item) => {
              return {
                value: item._id,
                label: `${item.label} - ${item.pavilion.label}`,
              };
            })}
          />
        </InputRow>
        <Input
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
    </Content>
  );

  const tecnicalReservation = (
    <Content>
      <Form schema={BookingSchema} onSubmit={onSubmit}>
        <InputRow>
          <Input
            width={50}
            name="date_init"
            type="date"
            label="Data Inicial"
            placeholder="09/12/1998"
          />
          <Select
            options={times}
            name="hour_init"
            label={"Horario de Inicio"}
            placeholder="07:30"
          />
          <Select
            options={times}
            name="hour_end"
            label={"Horario de Termino"}
            placeholder="08:20"
          />
          <Select
            label="Laboratório"
            name="laboratory"
            options={laboratory.map((item) => {
              return {
                value: item._id,
                label: item.label,
              };
            })}
          />
        </InputRow>
        <Input
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
    </Content>
  );

  // Nova reserva
  return (
    <Wrapper>
      <Header>
        <Title>Nova Reserva</Title>
        <SubTitle>Acrescente as informações necessárias</SubTitle>
      </Header>
      <Tabs
        headers={[
          "Reserva Única",
          "Reserva Semestral",
          "Reserva de Manutenção",
        ]}
        items={[uniqueReservation, semestralReservation, tecnicalReservation]}
        defaultTab={1}
      />
    </Wrapper>
  );
}
