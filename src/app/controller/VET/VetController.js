const { response, request } = require("express");
import ListVeterinariosService from "../../service/VET/ListVeterinarioService";
import createVeterinarioService from "../../service/VET/CreateVeterinarioService";
import UpdateVeterinarioService from "../../service/VET/UpdateVeterinarioService";
import deleteVeterinarioService from "../../service/VET/DeleteVeterinarioService";

const vetController = {
  listAll: (request, response) => {
    const veterinario = ListVeterinariosService.listAll();

    return response.send(veterinario);
  },

  create: (request, response) => {
    const { nome, telefone, email, login, senha, crmv, especialidade } =
      request.body;

    const veterinario = createVeterinarioService.createVeterinario(
      nome,
      telefone,
      email,
      login,
      senha,
      crmv,
      especialidade
    );
    return response.json(veterinario);
  },

  update: (request, response) => {
    const { id } = request.params;
    const { nome, telefone, email, login, senha, crmv, especialidade } =
      request.body;

    const updateVeterinario = UpdateVeterinarioService.update(
      id,
      nome,
      telefone,
      email,
      login,
      senha,
      crmv,
      especialidade
    );

    if (!updateVeterinario.sucess) {
      return response.status(400).json(updateVeterinario.message);
    }

    return response.status(200).json(updateVeterinario.message);
  },

  delete: (request, response) => {
    const { id } = request.params;

    const result = deleteVeterinarioService.delete(id);

    response.send(result);
  },
};
module.exports = vetController;
