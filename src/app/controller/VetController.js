const { response, request } = require("express");
const ListVeterinariosService = require("../service/ListVeterinarioService");
const createVeterinarioService = require("../service/CreateVeterinarioService");

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
};
module.exports = vetController;
