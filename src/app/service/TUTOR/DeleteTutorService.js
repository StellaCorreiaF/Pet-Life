const ListTutorService = require('../../service/Tutor/ListTutorService');

const DeleteTutorService = { 
    delete: (id) => { 
        const tutor = ListTutorService.listTutServ() 
        const tutorIndice = tutor.findIndex(item => item.id === Number(id)) 

        if (tutorIndice < 0){ 
            return {erro: 'Tutor não encontrado'}
        } 
        
        tutor.splice(tutorIndice, 1) 
        return {mensagem: 'Cadastro removido com sucesso'}
    }
}

module.exports = DeleteTutorService