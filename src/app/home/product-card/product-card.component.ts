import { CartItemModel } from './../../models/cartItem.model';
import { CartService } from './../../services/cart.service';
import { ProductModel } from './product.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: ProductModel;
  @Output() addToCart = new EventEmitter();

  btnGreatherThan50="btn-greaterThan50"

  constructor(private cartService:CartService){
    this.product = new ProductModel(0, "","", 0,"");

  }

  // ngOnInit(){
  //   console.log("Initialized");
  // }

  // ngOnChanges(){
  //   console.log("Input properties changed");
  // }

  // ngAfterContentInit(){
  //   console.log("ngAfterContentInit");
  // }

  // ngAfterContentChecked(){
  //   console.log("ngAfterContentChecked");
  // }

  // ngAfterViewInit(){
  //   console.log("ngAfterViewChecked");
  // }

  // ngAfterViewChecked(){
  //   console.log("ngAfterViewChecked");
  // }

  // ngOnDestroy(){
  //   console.log("ngOnDestroy");
  // }

  handleAddToCartClick(){
    console.log(this.product.name+" is added to the cart");
    this.addToCart.emit(this.product.name);
    this.cartService.add(new CartItemModel(0, this.product.id, 1));
  }
}
