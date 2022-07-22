const petModel = require('../../model/Pet') 

const ListPetService = { 
    listPetServ:() => { 
        const pet1 = new petModel ( 
            1, 
            "Caramelo", 
            30,  
            'o-',  
            'vira-lata',  
            4, 
            'Trav. Ventosa, 146',
            
        ) 

        const  pet2 = new petModel ( 
            2, 
            "Petkovic", 
            35,  
            'o+',  
            'poodle',  
            4, 
            'Trav. Ciridiao, 14',
        ) 
        return [pet1, pet2]
    },  

    listPetData: (petName) => { 
        const petList = ListPetService.listPetServ(); 
        const pet1 = petList.find(item => item.nome === petName);  
        //const pet1 = petList.find(item => console.log(item));
        //console.log(pet1); 
        return pet1


    }
} 

module.exports = ListPetService;  
