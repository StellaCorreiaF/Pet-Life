import * as yup from "yup";

export default async function petValidator (request,response,next) {
    const schema = yup.object().shape({
        nome:yup.string().strict().required('Nome é obrigatório').typeError('Deve ser uma string'),
        peso: yup.number().strict().required("Peso é obrigatório").typeError('Deve ser uma número'),
        tipoSanguineo: yup.string().strict().required("Tipo Sanguineo é obrigatório").typeError('Deve ser uma string'),
        raca: yup.string().strict().required("Raça é obrigatório").typeError('Deve ser uma string'),
        idade: yup.number().strict().required("Idade é obrigatório").typeError('Deve ser uma número'),
    })

    await schema.validate(request.body).catch(err => {
        return response.status(400).json({
            error: err.errors
        })
    })

    next();
}
