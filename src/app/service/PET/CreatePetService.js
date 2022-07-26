const petModel = require('../../model/Pet');
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
        const newPet = new petModel(
            v4(),
            name,
            peso,
            tipoSanguineo,
            raca,
            idade,
            endereco
        )

        
        return {
            sucess: true,
            message:newPet
           } 
      },
    }



module.exports = CreatePetService;