import { useEffect, useState } from "react";

import { times } from "global/hours.constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { locationService } from "service/location/location.service";
import { reservationService } from "service/reservation/reservation.service";
import { useAuth } from "store/slices/auth/useAuth";

import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";
import { Select } from "components/Form/Select";
import { Select as SelectCustom } from "components/Select";
import { type IOptions } from "components/Select/Select.types";
import { Tabs } from "components/Tabs";
import { Tooltip } from "components/Tooltip";
import { helpers } from "utils/helpers";

import CreateForm from "./Forms/Booking.create";
import EditForm from "./Forms/Booking.edit";
import { BookingUniqueSchema } from "./Booking.schema";

import { type IBookingUnique } from "./Booking.types";
import { type ILaboratory } from "global/laboratory.types";
import { type ILocation } from "global/location.types";
import { type IReservationList } from "global/reservations.types";

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
  const { user } = useAuth();
  const [laboratory, setLaboratory] = useState<ILaboratory[]>([]);
  const [booking, setBooking] = useState<IReservationList>();
  const [locations, setLocations] = useState<ILocation[]>();
  const [date, setDate] = useState<string>("");
  const [pavilion, setPavilion] = useState<string>("");
  const [pavilion2, setPavilion2] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const navigate = useNavigate();
  const isDisabled = id && booking && booking.status !== "reserved";

  const getBooking = async (): Promise<void> => {
    const { data } = await reservationService.getReservation(id as string);
    setBooking(data);
    setStartDate(
      new Date(data.endDate).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
    setEndDate(
      new Date(data.endDate).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
    setPavilion(data.room.pavilion._id);
  };

  const getPavilions = async (): Promise<void> => {
    const {
      data: { data },
    } = await locationService.getLocations({});
    setLocations(data);
  };

  const getLaboratories = async (): Promise<void> => {
    const { data } = await reservationService.getAvailableReservations(
      pavilion,
      helpers.toDateTime(date, startDate),
      helpers.toDateTime(date, endDate)
    );
    setLaboratory(data);
  };

  const edit = async (data: IBookingUnique): Promise<void> => {
    const { label, observation, dateStart, hourEnd, hourStart, laboratory } =
      data;

    if (hourEnd <= hourStart) {
      toast.warning("O horario de termino deve ser maior do que o inicial.");
      return;
    }

    await reservationService
      .updateReservation(booking?._id ?? "", {
        label: label ?? booking?.label,
        previousObservation: "default",
        laterObservation: observation ?? booking?.laterObservation,
        responsible: user._id,
        room: laboratory ?? booking?.room,
        startDate:
          helpers.toDateTime(dateStart, hourStart) ?? booking?.startDate,
        endDate: helpers.toDateTime(dateStart, hourEnd) ?? booking?.endDate,
        status: booking?.status ?? "reserved",
      })
      .then(({ status }) => {
        if (status !== 200) {
          toast.error("Erro ao editar reserva");
          return;
        }
        toast.success("Reserva editada com sucesso.");
        navigate("/");
      })
      .catch(({ response }) => {
        if (response.status === 412) {
          toast.warning("Já existe uma reserva neste horario e data.");
          return;
        }
        toast.error("Erro ao editar reserva");
      });
  };

  const onSubmit = async (data: IBookingUnique): Promise<void> => {
    if (id) {
      await edit(data);
      return;
    }

    const { label, observation, dateStart, hourEnd, hourStart, laboratory } =
      data;

    if (hourEnd <= hourStart) {
      toast.warning("O horario de termino deve ser maior do que o inicial.");
      return;
    }

    await reservationService
      .createReservation({
        label,
        previousObservation: "default",
        laterObservation: observation,
        responsible: user._id,
        room: laboratory,
        startDate: helpers.toDateTime(dateStart, hourStart),
        endDate: helpers.toDateTime(dateStart, hourEnd),
        status: "reserved",
      })
      .then(({ status }) => {
        if (status !== 201) {
          toast.error("Erro ao criar reserva");
          return;
        }
        toast.success("Reserva criada com sucesso, aguarde a aprovação");
        navigate("/");
      })
      .catch(({ response }) => {
        if (response.status === 412) {
          toast.warning("Já existe uma reserva neste horario e data.");
          return;
        }
        toast.error("Erro ao criar reserva");
      });
  };

  useEffect(() => {
    if (id) {
      getBooking().catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (!!date && !!startDate && !!endDate && !!pavilion) {
      getLaboratories().catch((err) => {
        toast.error(err.message);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate, date, pavilion]);

  useEffect(() => {
    getPavilions().catch((e) => {});
  }, []);

  const uniqueReservation = (
    <Content>
      {id && booking && locations ? (
        <EditForm
          id={id}
          booking={booking}
          isDisabled={isDisabled}
          startDate={startDate}
          endDate={endDate}
          pavilion={pavilion}
          laboratory={laboratory}
          locations={locations}
          navigate={navigate}
          setDate={setDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          setPavilion={setPavilion}
          onSubmit={onSubmit}
        />
      ) : (
        <CreateForm
          isDisabled={isDisabled}
          startDate={startDate}
          endDate={endDate}
          pavilion={pavilion}
          laboratory={laboratory}
          locations={locations}
          navigate={navigate}
          setDate={setDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          setPavilion={setPavilion}
          onSubmit={onSubmit}
        />
      )}
    </Content>
  );

  const semestralReservation = (
    <Content>
      <Form schema={BookingUniqueSchema} onSubmit={onSubmit}>
        <h1>Primeiro Dia</h1>
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
        <h1>Segundo Dia</h1>
        <InputRow>
          <Input
            disabled={isDisabled as boolean}
            onChange={(val: KeyboardEvent) => {
              setDate((val.currentTarget as HTMLInputElement).value);
            }}
            width={50}
            name="dateStart2"
            type="date"
            label="Data Inicial"
            placeholder="09/12/1998"
          />
          <Select
            disabled={isDisabled as boolean}
            options={times}
            name="hourStart2"
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
            name="hourEnd2"
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
              setPavilion2(value.value as string);
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
                if (item._id === pavilion2) {
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
            name="laboratory2"
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
          {/* <Button label="Salvar" color="primary" type="submit" /> */}
          <Tooltip label="Necessário integrar" position="right">
            <Button label="Salvar" color="primary" disabled />
          </Tooltip>
        </ButtonWrapper>
      </Form>
    </Content>
  );

  // Nova reserva
  return (
    <Wrapper>
      <Header>
        <Title>{id ? "Editando Reserva" : "Nova Reserva"}</Title>
        <SubTitle>
          {id
            ? "Edite as informações necessárias"
            : "Acrescente as informações necessárias"}
        </SubTitle>
      </Header>
      <Tabs
        headers={["Reserva Única", "Reserva Semestral (Aulas)"]}
        items={[uniqueReservation, semestralReservation]}
        defaultTab={0}
      />
    </Wrapper>
  );
}
