const ListPetService = require('../../service/PET/ListPetService');

const DeletePetService = { 
    delete: (id) => { 
        const pets = ListPetService.listPetServ() 
        const petIndice = pets.findIndex(item => item.id === Number(id)) 

        if (petIndice < 0){ 
            return {erro: 'Pet não encontrado'}
        } 
        
        pets.splice(petIndice, 1) 
        return {mensagem: 'Cadastro removido com sucesso'}
    }
}

module.exports = DeletePetService