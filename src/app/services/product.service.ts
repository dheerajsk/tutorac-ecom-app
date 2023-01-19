import { BehaviorSubject } from 'rxjs';
import { ProductModel } from './../home/product-card/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: BehaviorSubject<ProductModel[]>;

  constructor() {
    this.products = new BehaviorSubject<ProductModel[]>([]);
  }

  get(){
    return this.products.asObservable();
  }

  set(items: ProductModel[]){
    this.products.next(items);
  }

  getById(id:number){
    const products = this.products.getValue();
    console.log(products);
    let result = products.find(i=> i.id==id);
    return result;
  }
}
