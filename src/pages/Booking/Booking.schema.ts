import * as yup from "yup";

export const BookingSchema = yup.object().shape({
  observation: yup.string().required("Este campo é obrigatório"),
  laboratory: yup.string().required("Este campo é obrigatório"),
  date_init: yup.string().required("Este campo é obrigatório"),
  date_end: yup.string().required("Este campo é obrigatório"),
  hour_init: yup.string().required("Este campo é obrigatório"),
  hour_end: yup.string().required("Este campo é obrigatório"),
});
