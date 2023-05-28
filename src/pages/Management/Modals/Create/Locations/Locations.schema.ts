import * as yup from "yup";

export const LocationsSchema = yup.object().shape({
  label: yup.string().required("Este campo é obrigatório"),
  description: yup.string().required("Este campo é obrigatório"),
  observation: yup.string().required("Este campo é obrigatório"),
});
