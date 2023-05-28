import * as yup from "yup";

export const AdminSchema = yup.object().shape({
  name: yup.string().required("Este campo é obrigatório"),
  registration: yup.number().required("Este campo é obrigatório"),
  office: yup.string().required("Este campo é obrigatório"),
});
