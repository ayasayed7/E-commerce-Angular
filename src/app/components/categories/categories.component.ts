import { product, CategoryItem  } from 'src/app/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  categoryList : CategoryItem[] =[];

  isLoading :boolean = true;
  constructor(private _ProductsService:ProductsService) {}

  ngOnInit(): void {
    this._ProductsService.getAllCategories().subscribe({
      next: response =>{
        this.isLoading=false;
        this.categoryList=response.data;
        console.log(this.categoryList);

      },
      error: err=> {
        console.log(err);

      }
    })
  }
}
