import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent {

  cartId: string="";
  constructor(private _PaymentService:PaymentService , private _ActivatedRoute:ActivatedRoute){}

  shippingAddress:FormGroup = new FormGroup({
    details: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
  })

  submitShippingAddress(dataForm:FormGroup){
    console.log(dataForm.value);

    this._ActivatedRoute.params.subscribe(params =>{
      console.log(params);
      this.cartId=params['id'];

    })
    this._PaymentService.checkOut(this.cartId,dataForm.value).subscribe({
      next : (response :any) =>{
        if(response.status === 'success'){
          window.location.href = response.session.url;
        }
        console.log(response);

      },
      error: err =>{
        console.log(err);

      }
    })
  }


}
