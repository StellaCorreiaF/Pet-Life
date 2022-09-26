import * as yup from "yup";

export default async function petValidator(request, response, next) {
    const schema = yup.object().shape({
        nome: yup.string().strict().required('Nome é obrigatório').typeError('Deve ser uma string'),
        peso: yup.number().strict().required("Peso é obrigatório").typeError('Deve ser uma número'),
        tipoSanguineo: yup.string().strict().required("Tipo Sanguineo é obrigatório").typeError('Deve ser uma string'),
        raca: yup.string().strict().required("Raça é obrigatório").typeError('Deve ser uma string'),
        idade: yup.number().strict().required("Idade é obrigatório").typeError('Deve ser um número'),
        porte: yup.string().strict().required("Porte é obrigatório, identifique se é seu pet é de pequeno, médio ou grande porte").typeError('Deve ser uma string'),
        especie: yup.string().strict().required("É necessário identificar a espécie do seu pet").typeError('Deve ser uma string')
    })

    await schema.validate(request.body).catch(err => {
        return response.status(400).json({
            error: err.errors
        })
    })

    next();
}
