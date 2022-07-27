const { v4 } = require('uuid')
const TutorModel = require('../../model/TutorModel')

const createTutorService = {
    create: (id, nome, email, username, senha, telefone,cep,bairro,cidade,uf) => {
      if (id.length < 5) {
      const createTutor = {
        sucess: false,
        message: "id precisa ter pelo menos 5 caracteres"
      }
        return createdTutor
      }

    if (nome.length < 5) {
     const createTutor = {
        sucess: false,
        message: "nome precisa ter pelo menos 5 caracteres"
        }
      }

    if (!email.includes("@gmail") && !email.includes("@hotmail")) {
      return {
        sucess: false,
        message: "Somente email de @gmail e @hotmail podem participar"
      }
    }
    if (username.length < 5) {
     const createTutor = {
        sucess: false,
        message: "username precisa ter pelo menos 5 caracteres"
        }
      }

     if (senha.length < 5) {
     const createTutor = {
        sucess: false,
        message: "senha precisa ter pelo menos 5 caracteres"
        }
      }
      if (telefone.length < 10) {
     const createTutor = {
        sucess: false,
        message: "telefone precisa ter pelo menos 9 caracteres"
        }
      }
    const newTutor = new TutorModel(v4(), nome, email, username, senha, telefone, cep, bairro, cidade, uf)

    return {
      sucess: true,
      message: newTutor
    }
  }
}

module.exports = createTutorService