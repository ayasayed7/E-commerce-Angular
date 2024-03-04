import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/interfaces/product';
import { WhishlistService } from 'src/app/services/whishlist.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-whis-list',
  templateUrl: './whis-list.component.html',
  styleUrls: ['./whis-list.component.css']
})
export class WhisListComponent implements OnInit {

  productList :product[]=[];
  wishListData: string[] = [];

constructor(
  private _WhishlistService:WhishlistService ,
  private _ToastrService:ToastrService,
  private _CartService:CartService,
  ){}

  ngOnInit(): void {
    this._WhishlistService.getWishList().subscribe({
      next: response =>{
        console.log(response);
        this.productList = response.data;
        const newData = response.data.map((item:any)=>item._id);
        console.log(newData);
        this.wishListData =newData;

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

        // this._WhishlistService.getWishList().subscribe({
        //   next: response =>{
        //     console.log(response);
        //     this.productList = response.data;
        //   }
        // })

        const productData = this.productList.filter((item:any) => this.wishListData.includes(item._id));
        this.productList = productData;

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
