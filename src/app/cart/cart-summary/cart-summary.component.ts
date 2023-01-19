import { ProductModel } from './../../home/product-card/product.model';
import { ProductService } from './../../services/product.service';
import { CartItemModel } from './../../models/cartItem.model';
import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent {

  cartItems: CartItemModel[]=[];
  totalPrice:number=0;
  constructor(private cartService: CartService,
    private productService: ProductService){
    this.cartService.getItems().subscribe(
      (res)=>{
        this.cartItems=res;
        this.totalPrice = this.cartService.getTotalPrice();
      }
    );
  }

  getProductName(productID: number){
    return this.productService.getById(productID)?.name;
  }

  getProductPrice(productID: number){
    const product= this.productService.getById(productID);
    if(product){
      return product.price;
    }
    return 0;
  }

}
