import { AfterViewInit, Component, ElementRef, inject, OnInit, QueryList, signal, viewChild, ViewChild, viewChildren, ViewChildren } from '@angular/core';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { ProductsList } from "../products-list/products-list";
import { StaticCategories } from '../../services/static-categories';
import { CategoriesApi } from '../../services/categories-api';

@Component({
  selector: 'app-order',
  imports: [FormsModule, ProductsList],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order implements AfterViewInit,OnInit {
  selectedCatId: number = 0
  orderPrice: number = 0
  private categoriesApiSerive=inject(CategoriesApi)
  categories=signal<ICategory[]>([])
 headerEleList=viewChildren<ElementRef[]>('header')

  ngOnInit(): void {
    this.categoriesApiSerive.getAllCategories().subscribe({
      next:(res)=>{
        this.categories.set(res)
      }
    })
  }

  setOrderPrice(recievedTotalOrderPrice: number) {
    this.orderPrice = recievedTotalOrderPrice
  }

  ngAfterViewInit(): void {
  //  console.log(this.headersList.get(0));
    // console.log(this.prdListComp.totalOrderPrice);
   console.log(this.headerEleList());


  }
}
