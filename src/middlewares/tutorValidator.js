import * as yup from "yup";

export default async function tutorValidator(request, response, next) {
    const schema = yup.object().shape({
      nome: yup
        .string()
        .strict()
        .required("Nome é obrigatório")
        .min(5)
        .typeError("Deve ser uma string"),
      email: yup
        .string()
        .strict()
        .email()
        .matches(/@[^.]*\./)
        .required("E-mail não informado")
        .typeError("Deve ser uma string"),
      username: yup
        .string()
        .strict()
        .required("Username é obrigatório")
        .min(5)
        .typeError("Deve ser uma string"),
      telefone: yup
        .string()
        .strict()
        .required("Telefone é obrigatório")
        .min(10)
        .typeError("Deve ser uma string"),
      cep: yup
        .string()
        .strict()
        .required("CEP é obrigatório")
        .min(8)
        .typeError("Deve ser uma string"),
    });
    
    await schema.validate(request.body).catch((err) => {
      return response.status(400).json({
        error: err.errors,
      });
    });
    next();
  }

