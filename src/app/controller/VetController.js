const { response, request } = require("express");
const ListVeterinariosService = require("../service/ListVeterinarioService");
const createVeterinarioService = require("../service/CreateVeterinarioService");
const UpdateVeterinarioService = require("../service/UpdateVeterinarioService");
const deleteVeterinarioService = require('../service/DeleteVeterinarioService'); 

const vetController = {
  listAll: (request, response) => {
    const veterinario = ListVeterinariosService.listAll();

    return response.send(veterinario);
  },

  create: (request, response) => {
    const { nome, crmv, telefone, email, senha } = request.body;

    const veterinario = createVeterinarioService.createVeterinario(
      nome,
      crmv,
      telefone,
      email,
      senha
    );
    return response.json(veterinario);
  },

  update: (request, response) => {
    const { id } = request.params;
    const { nome, crmv, telefone, email, senha } = request.body;

    const updateVeterinario = UpdateVeterinarioService.update(
      id,
      nome,
      crmv,
      telefone,
      email,
      senha
    );

    if (!updateVeterinario.sucess) {
      return response.status(400).json(updateVeterinario.message);
    }

    return response.status(200).json(updateVeterinario.message);
  },

  delete: (request, response) => {
    const { id } = request.params

    const result = deleteVeterinarioService.delete(id)

    response.send(result)
  }
}
module.exports = vetController;
