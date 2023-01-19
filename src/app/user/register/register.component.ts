import { UserModel } from './../user.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user:UserModel;
  str:any;

  constructor(){
    this.user = new UserModel("", "", "");
  }

  handleRegister(){
    console.log(this.user);
  }

  handleNameChange(event:any){
    this.user.username=event.target.value;
  }

}
