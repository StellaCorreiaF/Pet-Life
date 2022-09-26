import Tutores from "../../models/Tutores";
import ListTutorService from "./ListTutorService";
import * as bcrypt from 'bcryptjs'

export default class UpdateTutorService {
    constructor() {
        this.service = new ListTutorService();
}

async update (
        id,
        nome,
        email,
        login,
        senha,
        telefone,
        cep,
        bairro,
        cidade,
        uf) {
   try {
    const tutor = await Tutores.findByPk(id);
    const passwordHash = await bcrypt.hash(senha, 8);

        if (!tutor) {
            return {
                sucess: false,
                message: "Tutor(a) não encontrado"};
            }
        
        const [numeroDeRegistrosAtualizados] = await Tutores.update(
            {
                nome,
                email,
                login ,
                senha:passwordHash,
                telefone,
                cep,
                bairro,
                cidade,
                uf,
            },
            {
              where: { id },
            }
          );

          if (numeroDeRegistrosAtualizados === 0) {
            return { sucess: false, message: "Dados iguais" };
          } else {
            return {
              id,
              nome,
              email,
              login,
              senha,
              telefone,
              cep,
              bairro,
              cidade,
              uf,
            };
        
    }
} catch (error) {
    console.log(error);
    return {sucess: false,
            message: error.message };
           }
        }
}