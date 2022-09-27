import { response } from "express";
import DeleteTutorService from "../../service/TUTOR/DeleteTutorService.js";

export default class DeleteTutorController {
    constructor(){
        this.service = new DeleteTutorService();
    }
    async delete(req, res){
        const{ id } = req.params;

        const results = await this.service.delete(id);

        res.send(results);
    }
}