import Tutores from "../../models/Tutores";
import Veterinarios from "../../models/Veterinarios";
import * as jwt from "jsonwebtoken";
import type from './authModel';
import { LoginResult } from "./LoginResult";
import securityConfig from "../../../config/security";

const PRIVATE_KEY = securityConfig.private_key

export default class LoginService {

    async CreateLogin(login, password) {

        const tutor = await Tutores.findOne(
            {
                where:
                    { login: login }
            });

        console.log("chegouaqui")

        if (tutor) {
            if (await tutor.verifyPassword(password)) {
                console.log("chegou")
                const token = jwt.sign({ id: tutor.id, user_type_id: type.TutorType }, PRIVATE_KEY);
                return new LoginResult(true, token)
            }
        }
        else {
            const veterinario = await Veterinarios.findOne(
                {
                    where:
                        { login: login }
                });
            if (veterinario) {
                if (await veterinario.verifyPassword(password)) {
                    console.log("chegou nessa bagaça")
                    const token = jwt.sign({ id: veterinario.id, user_type_id: type.VeterinarioType }, PRIVATE_KEY);
                    return new LoginResult(true, token);
                }
            }

        }
        return new LoginResult();
    }
}