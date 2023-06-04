import * as yup from "yup";

export const UsersSchema = yup.object().shape({
  role: yup.string().required("Este campo é obrigatório"),
  name: yup.string().required("Este campo é obrigatório"),
  email: yup.string().required("Este campo é obrigatório"),
  registration: yup.string().required("Este campo é obrigatório"),
  office: yup.string().required("Este campo é obrigatório"),
});
