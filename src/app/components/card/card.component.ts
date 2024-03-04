import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  productList:any[]=[];
  numOfCartItems: number=0;
  totalPrice: number = 0;
  errorMessage:string='';
  cartId:string='';
  isLoading :boolean = true;


  constructor(private _CartService: CartService){}

  ngOnInit(): void {
    this.getLoggedCart();
  }

  getLoggedCart(){
    this._CartService.getLoggedCart().subscribe({
      next : response=> {
        this.isLoading=false;
        this.numOfCartItems= response.numOfCartItems;
        this.totalPrice = response.data.totalCartPrice;
        this.productList = response.data.products;
        this.cartId=response.data._id;
        console.log(response);
        console.log(this.numOfCartItems , this.totalPrice , this.productList);


      },
      error: err=>{
        console.log(err);
        this.errorMessage = err.error.message;
      }
    })
  }

  removeProductFromCart(productId:string) {
    this._CartService.removeProductFromCart(productId).subscribe({
      next : response=> {
        this.numOfCartItems= response.numOfCartItems;
        this.totalPrice = response.data.totalCartPrice;
        this.productList = response.data.products;
        this._CartService.numOfCartItems.next(response.numOfCartItems);

        console.log(response);
      },
      error: err=>{
        console.log(err);

      }
    })
  }


  updateCart(productId:string , count:number) {

    if(count >=1){
      this._CartService.updateCart(productId,count).subscribe({
        next : response=> {
          this.numOfCartItems= response.numOfCartItems;
          this.totalPrice = response.data.totalCartPrice;
          this.productList = response.data.products;
          console.log(response);


        },
        error: err=>{
          console.log(err);

        }
      })
    }

  }

  clearCart() {
    this._CartService.clearCart().subscribe({
      next : response=> {
        this.numOfCartItems=0;
        this.totalPrice = 0;
        this.productList = [];
        this.errorMessage = 'no cart found';
        this._CartService.numOfCartItems.next(0);
        console.log(response);
      },
      error: err=>{
        console.log(err);
      }
    })
  }
}
