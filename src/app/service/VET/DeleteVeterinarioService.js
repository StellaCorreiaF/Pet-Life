import listVet from "../../service/VET/ListVeterinarioService";

const deleteVeterinarioService = {
  delete: (id) => {
    const veterinarios = listVet.listAll();
    const vetIndice = veterinarios.findIndex((item) => item.id === Number(id));
    if (vetIndice === -1) {
      return { erro: "Veterinário não encontrado" };
    }
    veterinarios.splice(vetIndice, 1);
    return { mensagem: "Cadastro removido com sucesso" };
  },
};
export default deleteVeterinarioService;
