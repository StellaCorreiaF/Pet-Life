const PetModel = require('../model/Pet');
const { v4 } = require('uuid')

const CreatePetService = {
    createPet: (
        name,
        peso,
        tipoSanguineo,
        raca,
        idade,
        endereco
    ) => {
        const newPet = new PetModel(
            v4(),
            name,
            peso,
            tipoSanguineo,
            raca,
            idade,
            endereco
        )

        return newPet; 
    }

}

module.exports = CreatePetService;