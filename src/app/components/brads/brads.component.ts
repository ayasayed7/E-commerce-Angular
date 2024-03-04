import { brands, product } from 'src/app/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

ProductsService

@Component({
  selector: 'app-brads',
  templateUrl: './brads.component.html',
  styleUrls: ['./brads.component.css']
})
export class BradsComponent implements OnInit {

  brand:string = '';
  brandsList: brands[] = [];
  isLoading :boolean = true;
  
constructor(private _ProductsService:ProductsService){}


  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this._ProductsService.getBrands().subscribe({
      next: response =>{
        this.isLoading=false;
        console.log(response);
        this.brandsList = response.data;
      },
    })
  }
}
