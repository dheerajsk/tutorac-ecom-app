import { BehaviorSubject } from 'rxjs';
import { ProductModel } from './../home/product-card/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: BehaviorSubject<ProductModel[]>;

  constructor() {
    var p1 = new ProductModel(1, "iPhone 13 Pro",
    "Created by Apple", 60000,
    "https://m.media-amazon.com/images/I/61VuVU94RnL._SX679_.jpg");

    var p2 = new ProductModel(2, "One plus buller",
    "Created by One Plus", 1699,
    "https://m.media-amazon.com/images/I/51UhwaQXCpL._SX679_.jpg");

    var p3 = new ProductModel(3, "Sansung Adaptor",
    "Created by Samsung", 1099,
    "https://m.media-amazon.com/images/I/21uXmiH98wL.jpg");

    var p4 = new ProductModel(4, "Unigen Wireless Charger",
    "Created by Unigen", 2799,
    "https://m.media-amazon.com/images/I/61OihFehtcS._SX679_.jpg");

    var p5 = new ProductModel(5, "MI PowerBank",
    "Created by MI", 1899,
    "https://m.media-amazon.com/images/I/71lVwl3q-kL._SX679_.jpg");

    var p6 = new ProductModel(6, "iPhone 13 Pro",
    "Created by Apple", 60000,
    "https://m.media-amazon.com/images/I/61VuVU94RnL._SX679_.jpg");
    var items =[];
    items.push(p1);
    items.push(p2);
    items.push(p3);
    items.push(p4);
    items.push(p5);
    items.push(p6);
    this.products = new BehaviorSubject<ProductModel[]>(items);
  }

  get(){
    return this.products.asObservable();
  }

  getById(id:number){
    const products = this.products.getValue();
    console.log(products);
    let result = products.find(i=> i.id==id);
    return result;
  }
}
