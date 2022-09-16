import UpdateRelationshipPetsVets from "../../service/PetsVets/UpdateRelationshipPetsVets";

export default class UpdateRelationshipPetsVetsController {
    constructor() {
      this.service = new UpdateRelationshipPetsVets();
    }
  
    async update(request, response) {
      const { id } = request.params;
      const {
          petId,
          vetId,
      } = request.body;
  
  
      const updatedPetSVes= await this.service.update(
          id,
          petId,
          vetId
      )
      
      return response.status(200).json(updatedPetSVes)     
    }

    }
