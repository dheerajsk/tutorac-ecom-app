
export class UserModel{

    constructor(name:String, email:String, password:String){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    name: String;
    email:String;
    password:String;
}