const ListPetService = require('../../service/PET/ListPetService');

const DeletePetService = { 
    delete: (id) => { 
        const pets = ListPetService.listPetServ() 
        const petIndex = pets.findIndex(item => item.id === Number(id)) 

        if (petIndex < 0){ 
            return {erro: 'Pet não encontrado'}
        } 
        
        pets.splice(petIndex, 1) 
        return {mensagem: 'Cadastro removido com sucesso'}
    }
}

module.exports = DeletePetService