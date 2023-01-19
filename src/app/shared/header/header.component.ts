import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  cartItemsCount:number;

  constructor(private cartService:CartService){
    this.cartItemsCount=0;
  }

  ngOnInit(){
    console.log("Component init");
    this.cartService.getItems().subscribe(
      // will be executed when next data is available in Subject.
      (updatedCount)=>{
        this.cartItemsCount = updatedCount.length;
        console.log("Data in Subject has updated");
        console.log(this.cartItemsCount);
      }
    )
  }
}
