import * as yup from "yup";

export const ForgotPasswordSchema = yup.object().shape({
  email: yup.string().min(8).max(10).required("Este campo é obrigatório"),
});
