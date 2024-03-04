import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

Observable
@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl: string = 'https://route-ecommerce.onrender.com';

  headers={
    token :localStorage.getItem('userToken') || ''
  }

  numOfCartItems=new BehaviorSubject(0);

  constructor(private _HttpClient:HttpClient ) {
    this.getLoggedCart().subscribe({
      next: response =>{
        console.log(response);
        this.numOfCartItems.next(response.numOfCartItems);
        console.log(this.numOfCartItems);

      },
      error: err =>{
        console.log(err);

      }
    })
  }

  addProductToCart( productId:string):Observable<any>{
    return this._HttpClient.post(`${this.baseUrl}/api/v1/cart`,
    {productId:productId},
    )
  }


  getLoggedCart():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/api/v1/cart`,
    )
  }

  removeProductFromCart(productId:string):Observable<any>{
    return this._HttpClient.delete(`${this.baseUrl}/api/v1/cart/${productId}`,
    )
  }

  updateCart(productId:string,count:number):Observable<any>{
    return this._HttpClient.put(`${this.baseUrl}/api/v1/cart/${productId}`,
    {count:count},
    )
  }

  clearCart():Observable<any>{
    return this._HttpClient.delete(`${this.baseUrl}/api/v1/cart`,
    )
  }
}
