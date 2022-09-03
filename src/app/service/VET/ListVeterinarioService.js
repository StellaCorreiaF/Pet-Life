const VeterinarioModel = require("../../model/VeterinarioModel");

const ListVeterinariosService = {
  listAll: () => {
    const veterinario = [
      new VeterinarioModel(
        2,
        "Eduardo Santos",
        "71 99999-9999",
        "eduvet@gmail.com",
        "eduvet",
        "edu123",
        "4569-BA",
        "Clinico Geral"
      ),
    ];
    return veterinario;
  },
};

module.exports = ListVeterinariosService;
