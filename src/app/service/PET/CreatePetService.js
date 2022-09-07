import petModel from '../../model/Pet';
const { v4 } = require('uuid')

export default class CreatePetService  {
    constructor() {}

    async create(
        nome,
        peso,
        tipoSanguineo,
        raca,
        idade,
    ) {
        try {
        const newPet = await petModel.create({
            id: v4(),
            nome,
            peso,
            tipoSanguineo,
            raca,
            idade
        })
        return newPet;
        } catch (error) {
        console.log(error);
        return { erro: error.mensagem};
        }
    }
}

