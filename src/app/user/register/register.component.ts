
import { Component } from '@angular/core';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user:UserModel;

  constructor(){
    this.user = new UserModel("","","");
  }

  handleInput(event:any){
    this.user.name = event.target.value;
  }

  handleSubmit(){
    console.log(this.user);
  }

}
