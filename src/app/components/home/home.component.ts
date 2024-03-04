import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { ToastrService } from 'ngx-toastr';
import { WhishlistService } from 'src/app/services/whishlist.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList :product[]=[];
  isLoading :boolean = true;
  term: string = "";
  wishListData: string[] = [];
  constructor(
    private _ProductsService:ProductsService,
    private _CartService:CartService,
    private _ToastrService: ToastrService,
    private _WhishlistService:WhishlistService
    ){}

  ngOnInit(): void {
    this.getAllProducts();
    this._WhishlistService.getWishList().subscribe({
      next: response=>{
        console.log(response.data);
        const newData = response.data.map((item:any)=>item._id);
        console.log(newData);
        this.wishListData =newData;

      }
    })



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
        this.isLoading=false;
        console.log(err);

      }
    })
  }


  addProductToCart(productId:string){
    this._CartService.addProductToCart(productId).subscribe({
      next: (response:any) =>{
        console.log(response);
        this._ToastrService.success(response.message, '' , {
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



  addWish(prodId:string):void {
    this._WhishlistService.addToWishList(prodId).subscribe({
      next: response =>{
        console.log(response);
        this.wishListData = response.data;
        this._WhishlistService.wishList.next(response.data.length);
        this._ToastrService.success(response.message, '' , {
          positionClass :'toast-bottom-right',
          progressBar : true,
          timeOut :3000
        });

      },
      error: err =>{
        console.log(err);

      }
    })
  }

  removeWish(prodId:string|undefined):void {
    this._WhishlistService.removeWishList(prodId).subscribe({
      next: response =>{
        console.log(response);
        this.wishListData = response.data;

        this._WhishlistService.wishList.next(response.data.length);
        this._ToastrService.warning(response.message, '' , {
          positionClass :'toast-bottom-right',
          progressBar : true,
          timeOut :3000
        });

      },
      error: err =>{
        console.log(err);

      }
    })
  }

}
