import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  email: yup.string(),
  // .email("Insira um email válido")
  // .required("Este campo é obrigatório"),
  password: yup.string(),
  // .min(8).max(10).required("Este campo é obrigatório"),
});
