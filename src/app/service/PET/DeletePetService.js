import Pets from "../../models/Pets";

export default class DeletePetService{ 
    constructor(){} 

    async delete(id){ 
        try{ 
            const pet = await Pets.findByPk(id); 

            if(!pet){ 
                return { message: "Pet não ecnocntrado"};
            } 

            const petRemovido = await pet.destroy(); 
            return petRemovido
        } catch(error){ 
            console.log(error); 
            return {erro: error.message};
        }
    }
}