const ListVeterinarioService = require("./ListVeterinarioService");

const UpdateVeterinarioService = {
  update: (id, nome, crmv, telefone, email, senha) => {
    const veterinarios = ListVeterinarioService.listAll();

    const updateVeterinario = veterinarios.find(
      (veterinario) => veterinario.id == id
    );
    const updateVeterinarioIndex = veterinarios.findIndex(
      (veterinario) => veterinario.id == id
    );

    if (!updateVeterinario) {
      return {
        sucess: false,
        message: "Veterinário não encontrado",
      };
    }
    veterinarios[updateVeterinarioIndex] = {
      id,
      nome,
      crmv,
      telefone,
      email,
      senha,
    };

    return {
      sucess: true,
      message: veterinarios[updateVeterinarioIndex],
    };
  },
};

module.exports = UpdateVeterinarioService;
