const veterinario = require("../../model/VeterinarioModel");
const { v4 } = require("uuid");
const { create } = require("yup/lib/Reference");

const createVeterinarioService = {
  createVeterinario: (
    nome,
    telefone,
    email,
    login,
    senha,
    crmv,
    especialidade
  ) => {
    const newVeterinario = new veterinario(
      v4(),
      nome,
      telefone,
      email,
      login,
      senha,
      crmv,
      especialidade
    );
    return newVeterinario;
  },
};
module.exports = createVeterinarioService;
