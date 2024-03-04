import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }

  baseUrl :string='https://route-ecommerce.onrender.com/';
  getAllProducts(): Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}api/v1/products`);
  }

  getAllCategories(): Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}api/v1/categories`);
  }

  getProductId(id:string): Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}api/v1/products/${id}`);
  }


  getBrands(): Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}api/v1/brands`);
  }


}
