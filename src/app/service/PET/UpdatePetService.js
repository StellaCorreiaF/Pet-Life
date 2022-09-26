import Pets from "../../models/Pets";
export default class UpdatePetService {
    constructor() { }

    async update(
        id,
        nome,
        peso,
        tipoSanguineo,
        raca,
        idade,
        porte,
        especie
    ) {
        try {
            const pet = await Pets.findByPk(id);
            console.log("chegou no pet: ", pet)

            if (!pet) {
                return {
                    message: "Pet não encontrado"
                }
            }
            console.log("CHEGOU NA SERVICE")
            const [numeroDeRegistrosAtualizados] = await Pets.update(
                {
                    id: id,
                    nome: nome,
                    peso: peso,
                    tipoSanguineo: tipoSanguineo,
                    raca: raca,
                    idade: idade,
                    porte: porte,
                    especie: especie
                },
                {
                    where: { id },
                }
            );
            if (numeroDeRegistrosAtualizados === 0) {
                return { message: "Dados iguais" };
            } else {
                return {
                    id: id,
                    nome: nome,
                    peso: peso,
                    tipoSanguineo: tipoSanguineo,
                    raca: raca,
                    idade: idade,
                    porte: porte,
                    especie: especie
                };
            }
        } catch (error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}