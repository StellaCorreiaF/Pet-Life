const TutorModel = require("../../model/TutorModel");

const ListTutorService = {
  listTutServ: () => {
    const tutor1 =
      new TutorModel(
        1,
        "Gabriel Marques",
        "gabrielMarques@gmail.com",
        "GabrielM",
        "Senha456",
        "7199876543",
        "41120020",
        "Trav. Ventosa, 146",
        "Salvador",
        "BA"
      )
    const tutor2 =
      new TutorModel(
        2,
        "Paula Braga",
        "paulabraga12@gmail.com",
        "PBraga",
        "Senha123",
        "9299812874",
        "05028000",
        "Trav. Ciridiao, 14",
        "São Paulo",
        "SP"
      )
    return [tutor1,tutor2];
  },
  listTutorData: (tutorName) => { 
    const tutorList = ListTutorService.listTutServ(); 
    const tutor1 = tutorList.find(item => item.nome === tutorName);  
    //const pet1 = petList.find(item => console.log(item));
    //console.log(pet1); 
    return tutor1

  }
};

module.exports = ListTutorService;