import Procedimentos from "../../models/Procedimentos";
import Tutores from "../../models/Tutores"
import Pets from "../../models/Pets"

const { v4 } = require('uuid');


export default class CreateProcedService {
  constructor() {}

  async create(tipo, data, descricao, tutorId, petId) {

    try {
        const tutor = await Tutores.findByPk(tutorId)
        const pet = await Pets.findByPk(petId)

        if (!tutor) {
          return {
            sucess: false,
            message: "Tutor não encontrado"
            }}  
        else if (!pet) {
          return {
            sucess: false,
            message: "Pet não encontrado"
            }}
        const newProcedimento = await Procedimentos.create({
            id: (v4),
            tipo: tipo,
            data: data,
            descricao: descricao,
            tutorId: tutor.id,
            petId: pet.id
            })

          return {
            sucess: true,
            message: newProcedimento
            }}  
          catch (error) {
            console.log(error);
          return { message: error.message } 
         }
  }

}