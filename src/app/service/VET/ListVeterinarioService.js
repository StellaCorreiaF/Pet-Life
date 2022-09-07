import VeterinarioModel from "../../model/VeterinarioModel";

export default class ListVeterinariosService  {
  constructor() {}

  async listAll() {
    try {
      const veterinarios = await VeterinarioModel.findAll();
      return veterinarios; 
    } catch (error) {
      console.log(error)
      return { erro : error.message}
    }
  }

}
