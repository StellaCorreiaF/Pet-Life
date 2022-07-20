const { response } = require('express');
const createVeterinarioService = require('../service/CreateVeterinarioService'); 

const vetController = {
   create: (request, response) => {
    const {
        nome, 
        crmv,
        telefone,
        email, 
        senha
    } = request.body; 

    const veterinario = createVeterinarioService.createVeterinario(nome, crmv, telefone, email, senha);
    return response.json(veterinario)
   }
}
module.exports = vetController; 