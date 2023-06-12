import * as yup from "yup";

export const ForgotPasswordSchema = yup.object().shape({
  new_password: yup
    .string()
    .min(8)
    .max(10)
    .required("Este campo é obrigatório"),
  confirm_password: yup
    .string()
    .min(8)
    .max(10)
    .required("Este campo é obrigatório"),
});
