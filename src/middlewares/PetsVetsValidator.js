import * as yup from "yup";

export default async function PetsVetsValidator(request, response, next) {
    const schema = yup.object().shape({
        petId: yup
            .string()
            .strict()
            .required("petId é obrigatório")
            .typeError("Deve ser uma string"),
       
        vetId: yup.string()
            .strict()
            .required("vetId é obrigatório")
            .typeError("Deve ser uma string")
    });

    await schema.validate(request.body).catch((err) => {
        return response.status(400).json({
            error: err.errors,
        });
    });
    next();
}