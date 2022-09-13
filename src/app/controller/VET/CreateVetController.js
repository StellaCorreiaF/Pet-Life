import createVeterinarioService from "../../service/VET/CreateVeterinarioService";

export default class CreateVetController {
    constructor() {
        this.service = new createVeterinarioService();
    }

    async create(request, response) {
        const {nome, crmv, telefone, login, email, senha, especialidade} = request.body;
        const veterinario = await this.service.create(
            nome, crmv, telefone, login, email, senha, especialidade
        )
        if (!veterinario.sucess) {
            return response.status(400).json(veterinario.message);
        }

        return response.status(201).json(veterinario.message);
    }

}