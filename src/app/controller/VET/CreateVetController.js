import createVeterinarioService from "../../service/VET/CreateVeterinarioService";

export default class CreateVetController {
    constructor() {
        this.service = new createVeterinarioService();
    }

    async create(request, response) {
        const {name, crmv, telefone, login, email, password, especialidade} = request.body;
        const veterinario = await this.service.create(
            name, crmv, telefone, login, email, password, especialidade
        )
        if (!veterinario.sucess) {
            return response.status(400).json(veterinario.message);
        }

        return response.status(201).json(veterinario.message);
    }

}