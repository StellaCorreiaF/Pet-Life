function petModel(id, nome, peso, tipoSanguineo, raca, idade, endereco){  
    this.id = id; 
    this.nome = nome; 
    this.peso = peso; 
    this.tipoSanguineo = tipoSanguineo; 
    this.raca = raca; 
    this.idade = idade; 
    this.endereco = endereco;

} 

module.exports = petModel;