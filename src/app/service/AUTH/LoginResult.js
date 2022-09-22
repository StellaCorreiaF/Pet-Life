export class LoginResult {
    success = false
    token = ""

    constructor(success = false, token = ""){
        this.success = success
        this.token = token
    }
}   