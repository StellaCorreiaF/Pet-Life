const veterinario = require('../../app/model/VeterinarioModel'); 
const { v4 } = require('uuid')
const { create } = require('yup/lib/Reference');

const createVeterinarioService = {
    createVeterinario: (
        nome, 
        crmv, 
        telefone, 
        email, 
        senha
    ) => {
        const newVeterinario = new veterinario(
            v4(),
            nome, 
            crmv, 
            telefone,
            email,
            senha
        );
        return newVeterinario;
    }
}
module.exports = createVeterinarioService;