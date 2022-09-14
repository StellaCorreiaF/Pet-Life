import Pets from "../../models/Pets";

export default class ListPetService { 

    constructor(){} 
    async listAll(petName){ 
        try{ 
            if(petName){ 
                return await this.listOne(petName);
            } 

            const pets = await Pets.findAll(); 
            return pets
        } catch(error){ 
            console.log(error); 
            return {erro: error.message}
        }
    } 

    async listOne(petName){ 
        try{ 
            const pet = await Pets.findOne({ 
                where: {nome: petName},
            }); 

            if(!pet){ 
                return { mensagem: "Pet não encontrado"};
            } 
            return pet;
        } catch(error){ 
            console.log(error); 
            return {erro: error.message};
        }
    }
} 