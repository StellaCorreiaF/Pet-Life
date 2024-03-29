import ListPetService from "../../service/PET/ListPetService.js";

export default class ListPetcontroller {
    constructor() {
        this.service = new ListPetService();
    }

    async index(request, response) {

        const { name } = request.query;

        const pets = await this.service.listAll(name);

        response.json(pets)
    }

    async listById(request, response) {
        const { id } = request.params; 
        const pet = await this.service.listOne(id); 

        response.json(pet); 


    }
}

