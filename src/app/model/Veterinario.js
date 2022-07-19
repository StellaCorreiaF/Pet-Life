function veterinarioModel(id, nome, crmv, telefone, petsConsultados) {
  this.id = id;
  this.nome = nome;
  this.crmv = crmv;
  this.telefone = telefone;
  this.petsConsultados = petsConsultados;
}

module.exports = veterinarioModel;
