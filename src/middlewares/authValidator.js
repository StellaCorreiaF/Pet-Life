import config from "../config/security.js";
import { verify } from "jsonwebtoken";
import Tutores from "../app/models/Tutores.js";
import Veterinarios from "../app/models/Veterinarios.js";


console.log('chegou nas middlewares de auth ')

export default function loggedIn(req, res, next) {

    let token = req.header('Authorization');
    try {
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length).trimLeft();
        }
        const verified = verify(token, config.private_key);
        if (!checkIFUserExists(verified.id)) {
            res.status(401).send("Usuário não autorizado..");
        }

        req.user = verified;
        next();
    }
    catch (err) {
        res.status(400).send("Invalid Token");
    }
}

function checkIFUserExists(id) {
    const tutor = Tutores.findByPk(id);
    const vet = Veterinarios.findByPk(id);

    return tutor || vet;
}