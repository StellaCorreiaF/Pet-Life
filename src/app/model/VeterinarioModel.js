function VeterinarioModel(
  id,
  nome,
  telefone,
  email,
  login,
  senha,
  crmv,
  especialidade
) {
  this.id = id;
  this.nome = nome;
  this.telefone = telefone;
  this.email = email;
  this.login = login;
  this.senha = senha;
  this.crmv = crmv;
  this.especialidade = especialidade;
}

module.exports = VeterinarioModel;
