import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { WhishlistService } from 'src/app/services/whishlist.service';
CartService

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogIn: boolean = false;
  wishNum:number = 0;

constructor(public _AuthService:AuthService , public _CartService:CartService , public _WhishlistService:WhishlistService){}

ngOnInit(): void {
  this._AuthService.userData.subscribe({
    next : ()=> {
      if(this._AuthService.userData.getValue() !== null)
        this.isLogIn = true;
      else
        this.isLogIn = false;

    }
  })

  this._WhishlistService.wishList.subscribe({
    next: response =>{
      this.wishNum = response;

    }
  })



  // this._WhishlistService.addToWishList().subscribe({
  //   next: response =>{
  //     this.wishNum = response.wishList;


  //   }
  // })
}
}
