import { CartService } from './../../services/cart.service';
import { ProductService } from './../../services/product.service';
import { ProductModel } from './../../home/product-card/product.model';
import { CartItemModel } from './../../models/cartItem.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() item: CartItemModel;
  product: ProductModel;

  constructor(private productService: ProductService,
    private cartService: CartService){
    this.item = new CartItemModel(0, 0, 0);
    this.product = new ProductModel(0, '','',0, '');
  }

  ngOnChanges(){
    console.log(this.item);
    this.product=this.productService.getById(this.item.productID) as ProductModel;
    console.log(this.product);
  }

  increaseQuantity(){
    this.item.quantity+=1;
    this.cartService.update(this.item);
  }

  decreaseQuantity(){
    if(this.item.quantity>1){
      this.item.quantity-=1;
      this.cartService.update(this.item);
    }
  }

}
