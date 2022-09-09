import petModel from '../../model/Pet';
import TutorModel from "../../model/TutorModel";
const { v4 } = require('uuid')

export default class CreatePetService  {
    constructor() {}

    async create(
        tutor,
        nome,
        peso,
        tipoSanguineo,
        raca,
        idade

    ) {
        try {

        const tutorId = TutorModel.findByPk(tutor)
        const newPet = await petModel.create({
            id: v4(),
            nome,
            peso,
            tipoSanguineo,
            raca,
            idade,
            tutorId



        })
        return newPet;
        } catch (error) {
        console.log(error);
        return { erro: error.mensagem};
        }
    }
}

