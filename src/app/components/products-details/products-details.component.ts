import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  productId: string='';
  productItem :any;
  isLoading: boolean = true;
constructor(private _ProductsService:ProductsService ,
   private _ActivatedRoute:ActivatedRoute,
   private _CartService:CartService,
   private toastr: ToastrService){}

customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
  },
  nav: true
}

ngOnInit(): void {

  this._ActivatedRoute.params.subscribe(params =>{
    this.productId = params['id'];
    console.log(this.productId);

  })
  this._ProductsService.getProductId(this.productId).subscribe({
    next: response =>{
      this.isLoading=false;
      this.productItem = response.data;
      console.log(this.productItem);

    }
    // error: err =>{
    //   console.log(err);

    // }
  })
}

addProductToCart(productId:string){
  this._CartService.addProductToCart(productId).subscribe({
    next: (response:any) =>{
      console.log(response);
      this.toastr.success(response.message, '' , {
        positionClass :'toast-bottom-right',
        progressBar : true,
        timeOut :3000
      });
      this._CartService.numOfCartItems.next(response.numOfCartItems);

    },
    error: err =>{
      console.log(err);

    }
  })
}

}
