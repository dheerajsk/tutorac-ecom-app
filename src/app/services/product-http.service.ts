import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ProductModel } from '../home/product-card/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  constructor(private http: HttpClient) { }
 
  get(){
    return this.http.get("http://localhost:4100/api/products")
      .pipe(map((res:any)=> res));
  }
}
