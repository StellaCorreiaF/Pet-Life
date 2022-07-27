const ListTutorService = require("./ListTutorService")


const UpdateTutorService = {
    updateTutor: (
        id,
        nome,
        email,
        username,
        senha,
        telefone,
        cep,
        bairro,
        cidade,
        uf
    ) => {
        const tutor = ListTutorService.listTutServ()
        
        const updateTutor = tutor.find((tutor) => tutor.id == id)
        
        const tutorIndice = tutor.findIndex(
            (tutor) => tutor.id == id
          );

        if (!updateTutor) {
            return {
                sucess: false,
                message: "Tutor(a) não encontrado"
            }
        }
        
        tutor[tutorIndice] = {
          id,
          nome,
          email,
          username,
          senha,
          telefone,
          cep,
          bairro,
          cidade,
          uf
        }
        
        return {
            sucess: true,
            message:
            tutor[tutorIndice]
        }
    
    }
}

module.exports = UpdateTutorService;