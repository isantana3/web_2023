import * as yup from "yup";

export const LaboratoriesSchema = yup.object().shape({
  label: yup.string().required("Este campo é obrigatório"),
  location: yup.string().required("Este campo é obrigatório"),
});
