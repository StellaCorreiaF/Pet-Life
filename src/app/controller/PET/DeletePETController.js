import DeletePetService from "../../service/PET/DeletePetService";

export default class DeletePetController {
    constructor() {
        this.service = new DeletePetService();
    }
    async delete(request, response) {
        const { id } = request.params;

        const resultado = await this.service.delete(id);

        response.send(resultado)
    }
}