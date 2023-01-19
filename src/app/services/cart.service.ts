import { ProductService } from './product.service';
import { ProductModel } from './../home/product-card/product.model';
import { CartItemModel } from './../models/cartItem.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems:BehaviorSubject<CartItemModel[]>;
  // cartItems:CartItemModel[];

  constructor(private productService: ProductService) {
    const data = localStorage.getItem("cartItems");
    if(data){
      const parsedItems = JSON.parse(data) as CartItemModel[];
      this.cartItems = new BehaviorSubject<CartItemModel[]>(parsedItems);
    }else{
      this.cartItems = new BehaviorSubject<CartItemModel[]>([]);
    }
  }

  update(item:CartItemModel){
    const items = this.cartItems.getValue();
    const index = items.findIndex(i=> i.id==item.id);
    items[index]=item;
    localStorage.setItem("cartItems", JSON.stringify(items));
    this.cartItems.next(items);
  }

  add(item:CartItemModel){
    const items = this.cartItems.getValue();
    item.id=items.length+1;
    items.push(item);
    localStorage.setItem("cartItems", JSON.stringify(items));
    this.cartItems.next(items);
    console.log("Item added in Service");
    // console.log(this.cartItems.length);
  }

  getItems(){
    return this.cartItems.asObservable();
  }

  clearCart(){
    localStorage.removeItem("cartItems");
    this.cartItems.next([]);
  }

  getTotalPrice(){
    let totalPrice=0;
    const items = this.cartItems.getValue();
    for(let i=0; i<items.length; i++){
      const item = items[i];
      totalPrice+= (this.productService.getById(item.productID) as ProductModel).price*item.quantity;
    }
    return totalPrice;
  }

}
