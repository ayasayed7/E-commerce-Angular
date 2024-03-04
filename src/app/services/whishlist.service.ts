import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhishlistService {

  baseUrl: string = 'https://route-ecommerce.onrender.com/api/v1/';

  wishList=new BehaviorSubject(0);

  headers={
    token :localStorage.getItem('userToken') || ''
  }

  constructor(private _HttpClient:HttpClient) { }

  addToWishList(prodId:string):Observable<any>{
    return this._HttpClient.post(this.baseUrl + 'wishlist' ,
    {
      productId: prodId
  })
  
  }

  getWishList():Observable<any>{
    return this._HttpClient.get(this.baseUrl + 'wishlist' )
  }

  removeWishList(prodId:string|undefined):Observable<any>{
    return this._HttpClient.delete(this.baseUrl + `wishlist/${prodId}` );
  }
}
