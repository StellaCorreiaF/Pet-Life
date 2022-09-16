import ListRelationshipPetsVetsService from "../../service/PetsVets/ListRelationshipPetsVets";

export default class ListAllRelationshipPetsVetsController {
    constructor(){
        this.service = new ListRelationshipPetsVetsService();
    }

    async listAll(request, response) {
        const petsVets = await this.service.listAll();
        return response.send(petsVets);
      }
}