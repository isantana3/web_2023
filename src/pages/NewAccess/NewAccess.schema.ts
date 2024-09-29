import * as yup from "yup";

export const NewAccessSchema = yup.object().shape({
  password: yup.string().min(8).max(100).required("Este campo é obrigatório"),
  confirm_password: yup
    .string()
    .min(8)
    .max(100)
    .required("Este campo é obrigatório"),
});
