function petModel(id, nome, peso, tipoSanguinio, raca, idade, endereco){  
    this.id = id; 
    this.nome = nome; 
    this.peso = peso; 
    this.tipoSanguinio = tipoSanguinio; 
    this.raca = raca; 
    this.idade = idade; 
    this.endereco = endereco;

} 

module.exports = petModel;