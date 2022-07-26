const CreateTutorService = require("../../service/tutor/CreateTutorService")
const ListTutorService = require("../../service/tutor/ListTutorService")
const UpdateTutorService = require("../../service/tutor/UpdateTutorService")
const DeleteTutorService = require("../../service/TUTOR/DeleteTutorService")

const TutorController = {
  listTutServ: (request, response) => {
    const tutor = ListTutorService.listTutServ()

    return response.send(tutor)
  },
  create: (request, response) => {
    const {
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
    } = request.body

    if (!id) {
      return response.status(400).json({
        message: "identidade é obrigatório"
      })
    }

    if (!nome) {
      return response.status(400).json({
        message: "nome é obrigatório"
      })
    }
    if (!email) {
      return response.status(400).json({
        message: "email é obrigatório"
      })
    }

    if (!username) {
      return response.status(400).json({
        message: "username é obrigatório"
      })
    }
    if (!senha) {
      return response.status(400).json({
        message: "senha é obrigatório"
      })
    }

    if (!telefone) {
      return response.status(400).json({
        message: "telefone é obrigatório"
      })
    }
    const createdTutor = CreateTutorService.create(id, nome, email, username, senha, telefone, cep, bairro, cidade, uf)

    if (!createdTutor.sucess) {
      return response.status(400).json(createdTutor.message)
    }

    return response.status(200).json(createdTutor.message)
  },
  update: (request, response) => {
    const { dados } = request.params
    const {
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
    } = request.body

    const updatedTutor = UpdateTutorService.updateTutor(id, nome, email, username, senha, telefone, cep, bairro, cidade, uf)

    if (!updatedTutor.sucess) {
      return response.status(400).json(updatedTutor.message)
    }

    return response.status(200).json(updatedTutor.message)
  },
  delete: (request, response) => {
    const { id } = request.params

    const result = DeleteTutorService.delete(id)

    response.send(result)
  }
}

module.exports = TutorController