import { CategoryItem } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.css']
})
export class CategorySliderComponent implements OnInit {


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 7
      },
    },
    nav: true
  }






  categoryList : CategoryItem[] =[];
constructor(private _ProductsService:ProductsService) {}

ngOnInit(): void {
  this._ProductsService.getAllCategories().subscribe({
    next: response =>{
      this.categoryList=response.data;
      console.log(this.categoryList);

    },
    error: err=> {
      console.log(err);

    }
  })
}



}
