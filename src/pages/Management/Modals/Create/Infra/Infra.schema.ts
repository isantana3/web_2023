import * as yup from "yup";

export const InfraSchema = yup.object().shape({
  code: yup.string().required("Este campo é obrigatório"),
  label: yup.string().required("Este campo é obrigatório"),
  room: yup.string().required("Este campo é obrigatório"),
});
