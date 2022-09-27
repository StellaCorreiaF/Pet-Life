import ListTutorService from "../../service/TUTOR/ListTutorService.js";

export default class ListAllTutorController {
  constructor() {
    this.service = new ListTutorService();
  }

  async listAll(request, response) {
    
    const tutors = await this.service.listAll();

    response.json(tutors);
  }
}
