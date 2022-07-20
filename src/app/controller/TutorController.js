const CreateTutorService = require("../../services/tutor/CreateTutorService")
const ListTutorService = require("../../services/tutor/ListTutorService")
const UpdateTutorService = require("../../services/tutor/UpdateTutorService")

const controller = {
  listAll: (request, response) => {
    const tutor = ListTutorService.listAll()

    return response.send(tutor)
  },
  create: (request, response) => {
    const {
      id,
      nome,
      email,
      username,
      senha,
      telefone
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
    const createdTutor = CreateTutorService.create(id, name, email, username, senha, telefone)

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
      telefone
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

    const updatedTutor = UpdateTutorService.update(id, name, age, city)

    if (!updatedTutor.sucess) {
      return response.status(400).json(updatedTutor.message)
    }

    return response.status(200).json(updatedTutor.message)
  }
}

module.exports = controller