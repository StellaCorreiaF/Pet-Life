import petModel from "../../model/Pet"; 

export default class DeletePetService{ 
    constructor(){} 

    async delete(id){ 
        try{ 
            const pet = await petModel.findByPk(id); 

            if(!pet){ 
                return { mensagem: "Pet não ecnocntrado"};
            } 

            const petRemovido = await pet.destroy(); 
            return petRemovido
        } catch(error){ 
            console.log(error); 
            return {erro: error.message};
        }
    }
}




// const ListPetService = require('../../service/PET/ListPetService');

// const DeletePetService = { 
//     delete: (id) => { 
//         const pets = ListPetService.listPetServ() 
//         const petIndice = pets.findIndex(item => item.id === Number(id)) 

//         if (petIndice < 0){ 
//             return {erro: 'Pet não encontrado'}
//         } 
        
//         pets.splice(petIndice, 1) 
//         return {mensagem: 'Cadastro removido com sucesso'}
//     }
// }

// module.exports = DeletePetService