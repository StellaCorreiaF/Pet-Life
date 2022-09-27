import CreateProcedimentoService from "../../service/PROCEDIMENTOS/CreateProcedService"

export default class CreateProcedController {
    constructor() {
        this.service = new CreateProcedimentoService();
    }
    async create(req, res) {

        const {
            tipo,
            data,
            descricao,
            petId,
            vetId
        } = req.body;
        console.log("CHEGOU AQUI ")
        const procedimento = await this.service.create(
            tipo,
            data,
            descricao,
            petId,
            vetId

        );
        console.log(procedimento)
        if (!procedimento.sucess) {
            return res.status(400).json(procedimento.message)
        }
        return res.status(201).json(procedimento.message)
    }

}