import ListPetService from "../../service/PET/ListPetService"; 

export default class ListPetcontroller{ 
    constructor(){ 
        this.service = new ListPetService();
    } 

    async index(request, response){ 
        
        const {name} = request.query; 

        const pets = await this.service.listAll(name); 

        response.json(pets)
    }
} 

