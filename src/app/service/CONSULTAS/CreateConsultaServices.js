import Pets from '../../models/Pets';
import Consultas from '../../models/Consultas';
import Vets from '../../models/Veterinarios';

const {v4} = require('uuid')

export default class CreateConsultaService {
    constructor() {
    }

    async create(
        data, descricao, petId, vetId) {
        try {
            const pets = await Pets.findByPk(petId)
            if (!pets){
             return {
                sucess: false,
                message: "Pet não encontrado"
            }}

            const vets = await Vets.findByPk(vetId)
            if (!vets){
             return {
                sucess: false,
                message: "Veterinário não encontrado"
            }}

            const newConsulta = await Consultas.create({
                id: v4(),
                data,
                descricao,
                petId: pets.id,
                vetId: vets.id
            })
            return {
                sucess: true,
                message: newConsulta
            }
        } catch (error) {
            console.log(error);
            return {erro: error.message};
        }
    }
}