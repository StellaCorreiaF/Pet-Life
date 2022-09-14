import Pets from '../../models/Pets';
import Tutores from '../../models/Tutores';

const {v4} = require('uuid')

export default class CreatePetService {
    constructor() {
    }

    async create(
        nome, peso, tipoSanguineo, raca, idade, tutorId) {
        try {
            const tutor = await Tutores.findByPk(tutorId)
            if (!tutor){
             return {
                sucess: false,
                message: "Tutor não encontrado"
            }}

            const newPet = await Pets.create({
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

