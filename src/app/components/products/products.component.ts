import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList :product[]=[];
  isLoading :boolean = true;


  constructor(
    private _ProductsService:ProductsService,
    private _CartService:CartService,
    ){}



    ngOnInit(): void {
      this.getAllProducts();
    }

    getAllProducts(){
      this._ProductsService.getAllProducts().subscribe({
        next: response =>{
          this.isLoading=false;
          console.log(response);
          this.productList = response.data;
          console.log(this.productList);

        },
        error: err =>{
          console.log(err);

        }
      })
    }


    addProductToCart(productId:string){
      this._CartService.addProductToCart(productId).subscribe({
        next: (response:any) =>{
          console.log(response);
          this._CartService.numOfCartItems.next(response.numOfCartItems);
        },
        error: err =>{
          console.log(err);

        }
      })
    }

}
