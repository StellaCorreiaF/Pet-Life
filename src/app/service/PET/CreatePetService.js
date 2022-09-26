import Pets from '../../models/Pets';
import Tutores from '../../models/Tutores';

const {v4} = require('uuid')

export default class CreatePetService {
    constructor() {
    }

    async create(
        {nome, peso, tipoSanguineo, raca, idade, porte, especie, tutorId}) {
        try {
            console.log('tutorId :', tutorId);
            const tutor = await Tutores.findByPk(tutorId)
            console.log("PET SERVICE, TUTOR CHEGOU AQUI: ", tutor)
            if (!tutor){
                console.log("tutor: service n encontrado  ", tutor)
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
                porte: porte, 
                especie: especie,
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

