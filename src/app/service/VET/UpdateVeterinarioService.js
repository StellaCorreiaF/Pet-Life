import Veterinarios from "../../models/Veterinarios.js";

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
      const veterinario = await Veterinarios.findByPk(id);

        if (!veterinario) {
            return {
                sucess: false,
                message: "Veterinário(a) não encontrado(a)"};
            }
   
      const [numeroDeRegistrosAtualizados] = await Veterinarios.update(
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
