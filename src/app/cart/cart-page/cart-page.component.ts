import { ProductService } from './../../services/product.service';
import { CartItemModel } from './../../models/cartItem.model';
import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

  cartItems: CartItemModel[]=[];

  constructor(private cartService: CartService,
              private productService: ProductService){
    this.cartService.getItems().subscribe(
      res=>{
        this.cartItems = res;
      }
    )
  }
}
