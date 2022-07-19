const veterinarioModel = require('../../model/Veterinario')
const { v4 } = require('uuid');
const { create } = require('yup/lib/Reference');

const createVeterinarioService = {
    createVeterinario: (
        nome, 
        crmv, 
        telefone, 
        email, 
        senha
    ) => {
        const newVeterinario = new veterinarioModel(
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