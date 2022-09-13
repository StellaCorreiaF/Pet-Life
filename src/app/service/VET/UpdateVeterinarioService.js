import VeterinarioModel from "../../model/VeterinarioModel";

export default class UpdateVeterinarioService {
  constructor() {}

  async update(
    id,
    nome,
    telefone,
    email,
    login,
    senha,
    crmv,
    especialidade
  ) {
    try {
      // const veterinario = await VeterinarioModel.findByPk(id);

      // if (!veterinario) {
      //   return {
      //     message: "Vet não encontrado",
      //   };
      // }

      const [numeroDeRegistrosAtualizados] = await VeterinarioModel.update(
        {
          id,
          nome,
          telefone,
          email,
          login,
          senha,
          crmv,
          especialidade,
        },
        {
          where: { id },
        }
      );
      if (numeroDeRegistrosAtualizados === 0) {
        return { message: "Dados iguais" };
      } else {
        return {
          id,
          nome,
          telefone,
          email,
          login,
          senha,
          crmv,
          especialidade,
        };
      }
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
