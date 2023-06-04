import * as yup from "yup";

yup.addMethod(yup.string, "email", function (errorMessage) {
  return this.test(`test-email`, errorMessage, function (value) {
    const { path, createError } = this;

    return (
      value?.includes("@uesc.br") ??
      createError({ path, message: errorMessage })
    );
  });
});

export const UsersSchema = yup.object().shape({
  role: yup.string().required("Este campo é obrigatório"),
  name: yup.string().required("Este campo é obrigatório"),
  email: yup
    .string()
    .email("Email deve ser institucional.")
    .required("Este campo é obrigatório."),
  registration: yup.string().required("Este campo é obrigatório"),
  office: yup.string().required("Este campo é obrigatório"),
  password: yup.string().required("Este campo é obrigatório"),
});
