import * as yup from "yup";

export const BookingUniqueSchema = yup.object().shape({
  label: yup.string().required("Este campo é obrigatório"),
  observation: yup.string(),
  laboratory: yup.string().required("Este campo é obrigatório"),
  dateStart: yup.string().required("Este campo é obrigatório"),
  hourStart: yup.string().required("Este campo é obrigatório"),
  hourEnd: yup.string().required("Este campo é obrigatório"),
});
