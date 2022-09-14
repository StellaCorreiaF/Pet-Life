import * as yup from "yup";

export default async function vetValidator(request, response, next) {
    const schema = yup.object().shape({
        name: yup
            .string()
            .strict()
            .required("Nome é obrigatório")
            .typeError("Deve ser uma string"),
        crmv: yup
            .string()
            .strict()
            .required("O CRMV do veterinário é obrigatório")
            .typeError("Deve ser uma string"),
        telefone: yup
            .string()
            .strict()
            .required("Telefone obrigatório")
            .min(11)
            .typeError("Deve ser uma string"),
       
        login: yup.string()
            .strict()
            .required("Login obrigatório")
            .typeError("Deve ser uma string"),
        senha: yup.string()
            .strict()
            .required("Senha obrigatória")
            .min(6)
            .typeError("Deve ser uma string"),
        especialidade: yup.string()
            .strict()
            .required("Campo obrigatório")
            .typeError("Deve ser uma string")
    });

    await schema.validate(request.body).catch((err) => {
        return response.status(400).json({
            error: err.errors,
        });
    });
    next();
}
