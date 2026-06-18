import { Component, inject, OnInit, signal } from '@angular/core';
import { CategoriesApi } from '../../services/categories-api';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../models/iproduct';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule,JsonPipe],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct implements OnInit{
  private categoriesApiService=inject(CategoriesApi)
  categories=signal<ICategory[]>([])
  product:IProduct={} as IProduct

  ngOnInit(): void {
    this.categoriesApiService.getAllCategories().subscribe((res)=>{
       this.categories.set(res)
    })
  }

  addNewProduct(){
    //api call , product
    //this.router.navigate('/order')
  }
}
