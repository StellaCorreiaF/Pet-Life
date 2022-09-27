import Veterinarios from "../../models/Veterinarios.js";

export default class DeleteVeterinarioService {
  constructor() {}

  async delete(id) {
    try {
      const veterinario = await Veterinarios.findByPk(id);

      if (!veterinario) {
        return { mensagem: "Veterinário não encontrado" };
      }

      const VeterinarioRemovido = await veterinario.destroy();
      return VeterinarioRemovido;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
