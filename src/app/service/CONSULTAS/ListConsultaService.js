import Consultas from '../../models/Consultas.js';


export default class createConsultaService {
  constructor() {}

 async listAll() {
  try {
     const consultas = await Consultas.findAll()
     return consultas;
  } catch (error) {
    console.log(error);
    return {erro: error.message };
  }
 }
}