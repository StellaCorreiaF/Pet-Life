import Tutores from "../../models/Tutores";
import ListTutorService from "./ListTutorService";
export default class DeleteTutorService {
    constructor() {
        this.service = new ListTutorService();
    }

    async delete(id) {
        try {
            const tutor = await Tutores.findByPk(id);
            if (!tutor) {
                return {
                    sucess: false,
                    message: "Tutor(a) não encontrado"
                };
            }
            const tutorExcluido = await tutor.destroy();
            return tutorExcluido;
        } catch (error) {
            console.log(error);
            return { erro: error.mensage };
        }
    }


}