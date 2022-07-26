function tutorModel(id, nome, email, username, senha, telefone, cep, bairro, cidade, uf){  
    this.id = id; 
    this.nome = nome; 
    this.email = email; 
    this.username = username; 
    this.senha = senha; 
    this.telefone = telefone;
    this.cep = cep;
    this.bairro = bairro;
    this.cidade = cidade;
    this.uf = uf; 
   
} 

module.exports = tutorModel;