import { UUIDV4 } from 'sequelize'
import Pets from '../../models/Pets'
import PetsVets from '../../models/PetsVets'
import Veterinarios from '../../models/Veterinarios'

const {v4} = require('uuid')

export default class createRelationshipPetsVets{
    constructor(){}
    async create(petId, vetId){
        try {
            const pet = await Pets.findByPk(petId)
            const vet = await Veterinarios.findByPk(vetId)

            if(!pet){
                return { message: "Pet não localizado"}
            }
            if(!vet){
                return { message: "Veterinário não localizado"}
            }

            const newRelationship = await PetsVets.create({
                id: v4(),
                petId: pet.id, 
                vetId: vet.id
                }
            )
            
            return {
                sucess: true,
                message: newRelationship, pet, vet
            }
        } catch (error) {
            console.log(error);
            return {erro: error.message};
        }
    }
        }
    

