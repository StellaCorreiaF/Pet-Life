import veterinario from "../../model/VeterinarioModel";
import { v4 } from "uuid";
import { create } from "yup/lib/Reference";

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
export default createVeterinarioService;
