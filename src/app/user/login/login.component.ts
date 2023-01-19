import { Component } from '@angular/core';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:UserModel;

  constructor(){
    this.user = new UserModel("","","");
  }

  handleFormSubmit(){
    console.log(this.user);
  }
}
