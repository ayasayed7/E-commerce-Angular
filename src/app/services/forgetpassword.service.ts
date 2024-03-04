import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {
  baseUrl: string = 'https://ecommerce.routemisr.com/api/v1/auth/';

  constructor(private _HttpClient:HttpClient) { }

  forgotPassword(UserEmail:object):Observable<any> {
    return this._HttpClient.post(this.baseUrl+`forgotPasswords`,UserEmail)
  }

  resetCode(resetCode:object):Observable<any> {
    return this._HttpClient.post(this.baseUrl+`verifyResetCode`,resetCode)
  }

  resetPassword(resetPasswordForm:object):Observable<any> {
    return this._HttpClient.put(this.baseUrl+`resetPassword`,resetPasswordForm)
  }
}
