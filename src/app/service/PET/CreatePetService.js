import petModel from '../../model/Pet';
import TutorModel from "../../model/TutorModel";

const {v4} = require('uuid')

export default class CreatePetService {
    constructor() {
    }

    async create(
        nome, peso, tipoSanguineo, raca, idade, tutorId) {
        try {
            const tutor = await TutorModel.findByPk(tutorId)
            if (!tutor) return;

            const newPet = await petModel.create({
                id: v4(),
                nome: nome,
                peso: peso,
                tipoSanguineo: tipoSanguineo,
                raca: raca,
                idade: idade,
                tutorId: tutor.id
            })
            return {
                sucess: true,
                message: newPet
            }
        } catch (error) {
            console.log(error);
            return {erro: error.message};
        }
    }
}

