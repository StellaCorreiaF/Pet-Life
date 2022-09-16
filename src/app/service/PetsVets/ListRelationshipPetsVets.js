import PetsVets from "../../models/PetsVets";

export default class ListRelationshipPetsVetsService  {
  constructor() {}

  async listAll() {
    try {
      const petsVets = await PetsVets.findAll();
      return petsVets; 
    } catch (error) {
      console.log(error)
      return { erro : error.message}
    }
  }

}