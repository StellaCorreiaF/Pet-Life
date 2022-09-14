import createRelationshipPetsVets from "../../service/PetsVets/CreateRelationshipPetsVets";


export default class CreateRelationshipPetsVetsController {
    constructor() {
      this.service = new createRelationshipPetsVets();
    }
  
    async create(request, response) {
      const {
          petId, vetId
      } = request.body;
  
      const newRelationship = await this.service.create(
          petId, vetId
      );
  
      return response.status(201).json(newRelationship)
    }
}