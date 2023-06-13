import * as yup from "yup";

export const UserSchema = yup.object().shape({
  email: yup.string().required("Este campo é obrigatório"),
  senha: yup.string().required("Este campo é obrigatório"),
});
