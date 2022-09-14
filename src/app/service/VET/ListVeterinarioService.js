import Veterinarios from "../../models/Veterinarios";


export default class ListVeterinariosService  {
  constructor() {}

  async listAll() {
    try {
      const veterinarios = await Veterinarios.findAll();
      return veterinarios; 
    } catch (error) {
      console.log(error)
      return { erro : error.message}
    }
  }

}
