import { ProductService } from './../../services/product.service';
import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { ProductModel } from '../product-card/product.model';
import { ProductHttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: ProductModel[];

  constructor(
    private productHttpService: ProductHttpService,
    private productService: ProductService){
    this.products=[];
   
    this.productHttpService.get().subscribe(
      (result)=>{
        this.products=result;
        this.productService.set(this.products);
      }
    )
  }

  handleAddToCartEvent(name:any){
    console.log(name);
    console.log(name+" is added to cart. Notified to Home");

  }
}
