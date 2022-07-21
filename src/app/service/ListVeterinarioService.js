const VeterinarioModel = require("../model/VeterinarioModel");

const ListVeterinariosService = {
  listAll: () => {
    const veterinario = [
      new VeterinarioModel(
        2,
        "Marcos Alonso",
        32142817,
        "71985387896",
        "marcosalonso@gmail.com",
        "Senha123"
      ),
    ];
    return veterinario;
  },
};

module.exports = ListVeterinariosService;
