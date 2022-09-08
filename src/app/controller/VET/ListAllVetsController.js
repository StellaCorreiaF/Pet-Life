import ListVeterinariosService from "../../service/VET/ListVeterinarioService";

export default class ListAllVetsController {
    constructor(){
        this.service = new ListVeterinariosService();
    }

    async listAll(request, response) {
        const veterinarios = await this.service.listAll();
        return response.send(veterinarios);
      }
}