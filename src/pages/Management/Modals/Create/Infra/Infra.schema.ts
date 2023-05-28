import * as yup from "yup";

export const InfraSchema = yup.object().shape({
  code: yup.string().required("Este campo é obrigatório"),
  label: yup.string().required("Este campo é obrigatório"),
  pavilion: yup.string().required("Este campo é obrigatório"),
});
