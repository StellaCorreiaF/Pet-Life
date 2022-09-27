import Consultas from '../../models/Consultas.js';

export default class DeleteConsultaService {
    constructor() {}
  
    async delete(id) {
      try {
        const consultas = await Consultas.findByPk(id);
  
        if (!consultas) {
          return { mensagem: "Consulta não encontrada" };
        }
  
        const consultasRemovida = await consultas.destroy();
        return consultasRemovida;
      } catch (error) {
        console.log(error);
        return { erro: error.message };
      }
    }
  }