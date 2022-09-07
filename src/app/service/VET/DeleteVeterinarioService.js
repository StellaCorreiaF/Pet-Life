import VeterinarioModel from "../../model/VeterinarioModel";

export default class DeleteVeterinarioService {
  constructor() {}

  async delete(id) {
    try {
      const veterinario = await VeterinarioModel.findByPk(id);

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
