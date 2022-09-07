import VeterinarioModel from "../../model/VeterinarioModel";

export default class UpdateVeterinarioService {
  constructor() {}

  async update(
    id,
    name,
    telefone,
    email,
    login,
    password,
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
          name,
          telefone,
          email,
          login,
          password,
          crmv,
          especialidade,
        },
        {
          where: { id },
        }
      );
      if (numeroDeRegistrosAtualizados === 0) {
        return { mensagem: "Dados iguais" };
      } else {
        return {
          id,
          name,
          telefone,
          email,
          login,
          password,
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
