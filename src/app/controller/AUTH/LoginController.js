import LoginService from "../../service/AUTH/LoginService";

export default class LoginController {

    async Login (req, res) {
        const {login, password} = req.body;

        if (!login || !password)
            return res.status(400).json({message: "usuário e/ou senha invalidos."})
        const service = new LoginService()

        const resultLogin = await service.CreateLogin(login, password);

        console.log(resultLogin)

        if (!resultLogin.success)
            return res.status(400).json({message: "usuário e/ou senha invalidos."})

        return res.status(201).json(resultLogin);
    }   

}