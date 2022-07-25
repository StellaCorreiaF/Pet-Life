// const { response } = require('../../app');
const petModel = require ('../model/Pet')

//Mocando enquanto o banco de dados não está pronto
const controller = { 
    index: (req, res) =>{ 
        const pet = new petModel( 
            1, 
            "Caramelo", 
            30,  
            'o-',  
            'vira-lata',  
            4, 
            'Trav. Ventosa, 146',  

        ); 

        res.json(pet);

    } 

} 

module.exports = controller; 