import Pets from '../app/models/Pets';
import type from  '../app/service/AUTH/authModel';

export function tutorIsAuthorized(req, res, next) {
    const user = req.user;

    if (user.user_type_id !== type.TutorType)
        return res.status(403).send("Usuário sem permissão");

    next()
}

export function VetIsAuthorized(req, res, next) {
    const user = req.user;

    if (user.user_type_id !== type.VeterinarioType)
        return res.status(403).send("Apenas veterinários possuem permissão para acessar esta sessão");

    next()
}

export const isTutorOfPet = async (req, res, next) => {
    const user = req.user;    
    
        const petId = req.params.id;
        const pet = await Pets.findByPk(petId);
        console.log("pet", pet.tutorId)
        if (user.id !== pet.tutorId)
            return res.status(403).send("Usuário não está autorizado a manipular este registro");
    
    next()
}
 
