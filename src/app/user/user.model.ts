
export class UserModel{

  constructor(username:string, useremail:string, password:string){
    this.username = username;
    this.password = password;
    this.useremail=useremail;
  }

  username:string;
  useremail:string;
  password:string;
}
