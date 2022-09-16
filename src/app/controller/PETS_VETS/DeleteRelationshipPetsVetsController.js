import DeleteRelationshipPetsVetsService from "../../service/PetsVets/DeleteRelationshipPetsVets"; 

export default class DeleteRelationShipPetsVetsController { 
    constructor(){ 
        this.service = new DeleteRelationshipPetsVetsService();
    } 
    async delete(request, response){ 
        const {id} = request.params; 

        const resultado = await this.service.delete(id); 

        response.send(resultado)
    }
}