import ListVeterinarioService from "../../service/VET/ListVeterinarioService";

const UpdateVeterinarioService = {
  update: (id, nome, telefone, email, login, senha, crmv, especialidade) => {
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
      telefone,
      email,
      login,
      senha,
      crmv,
      especialidade,
    };

    return {
      sucess: true,
      message: veterinarios[updateVeterinarioIndex],
    };
  },
};

export default UpdateVeterinarioService;
