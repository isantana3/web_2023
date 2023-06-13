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

export const ForgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email deve ser institucional.")
    .required("Este campo é obrigatório."),
});
