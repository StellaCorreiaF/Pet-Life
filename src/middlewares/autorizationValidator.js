
import Pets from '../app/models/Pets.js';
import Tutores from '../app/models/Tutores.js';
import Veterinarios from '../app/models/Veterinarios.js';
import type from '../app/service/AUTH/authModel.js';


console.log('chegou nas middlewares de authoriz ')

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
    console.log("CHEGOU NA MIDDLEWARE")
    const user = req.user;
    const petId = req.body.id;
    const pet = await Pets.findByPk(petId);
    
    console.log("pet", pet.tutorId)
    if (user.id !== pet.tutorId)
        return res.status(403).send("Usuário não está autorizado a manipular este registro");

    next()
}

export const isTutorLoggedIsSameTarget = async (req, res, next) => {
    const user = req.user;
    const targetTutorId = req.params.id;
    const targetTutor = await Tutores.findByPk(targetTutorId)

    if (user.id !== targetTutor.id) {
        return res.status(403).send("Usuário não está autorizado a manipular este registro");
    }
    next()
}

export const isVetLoggedIsSameTarget = async (req, res, next) => {
    const user = req.user;
    const targetVetId = req.params.id;
    const targetVet = await Veterinarios.findByPk(targetVetId);

    if (user.id !== targetVet.id) {
        return res.status(403).send("Usuário não está autorizado a manipular este registro");
    }
    next()

}
