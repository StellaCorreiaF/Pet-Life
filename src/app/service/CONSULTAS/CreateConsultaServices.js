import Pets from '../../models/Pets.js';
import Consultas from '../../models/Consultas.js';
import Vets from '../../models/Veterinarios.js';

const {v4} = require('uuid')

export default class CreateConsultaService {
    constructor() {
    }

    async create(
        data, descricao, petId, vetId) {
        try {
            const pet = await Pets.findByPk(petId); 
            const vet = await Vets.findByPk(vetId);

            if (!pet){
             return {
                sucess: false,
                message: "Pet não encontrado"}
            }

            if (!vet){
             return {
                sucess: false,
                message: "Veterinário não encontrado"}
            }

            const newConsulta = await Consultas.create({
                id: v4(),
                data,
                descricao,
                petId: pet.id,
                vetId: vet.id
            })
            return {
                sucess: true,
                message: newConsulta, pet, vet
            }
        } catch (error) {
            console.log(error);
            return {erro: error.message};
        }
    }
}