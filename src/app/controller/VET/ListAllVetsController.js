import ListVeterinariosService from "../../service/VET/ListVeterinarioService";

export default class ListAllVetsController {
    constructor(){
        this.service = new ListVeterinariosService();
    }

    listAll(request, response) {
        const veterinarios = this.service.listAll();
        return response.send(veterinarios); 
    }
}