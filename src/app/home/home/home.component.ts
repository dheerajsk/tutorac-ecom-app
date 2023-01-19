import { ProductService } from './../../services/product.service';
import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { ProductModel } from '../product-card/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: ProductModel[];

  constructor(private productService: ProductService){
    this.products=[];
    this.productService.get().subscribe(
      (result)=>{
        this.products=result;
        console.log(this.products);
        console.log(this.products.length);
      }
    )

  }

  handleAddToCartEvent(name:any){
    console.log(name);
    console.log(name+" is added to cart. Notified to Home");

  }
}
