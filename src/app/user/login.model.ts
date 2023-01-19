
export class LoginModel{

  constructor(useremail:string, password:string){

    this.password = password;
    this.useremail=useremail;
  }
  useremail:string;
  password:string;
}
