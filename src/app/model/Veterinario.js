function veterinarioModel(id, nome, crmv, telefone, email, senha) {
  this.id = id;
  this.nome = nome;
  this.crmv = crmv;
  this.telefone = telefone;
  this.email = email;
  this.senha = senha;
}

module.exports = veterinarioModel;
