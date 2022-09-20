
import type from  '../app/service/AUTH/authModel';

export function tutorIsAuthorized(req, res, next) {
    const user = req.user;

    if (user.user_type_id !== type.TutorType)
        res.status(403).send("Usuário sem permissão");

    next()
}

export function VetIsAuthorized(req, res, next) {
    const user = req.user;

    if (user.user_type_id !== type.VeterinarioType)
        res.status(403).send("Usuário sem permissão");

    next()
}
 export function loggedTutorIsTheSameTarget(req, res, next) {
   
    const loggedUser = req.user;
    const targetUser = req.user;  

    if(loggedUser !== targetUser.user_id) 
    res.status(403).send("Usuário sem permissão");

    next(); 
}
 
