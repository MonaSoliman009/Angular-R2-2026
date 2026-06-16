import { AfterViewInit, Component, ElementRef, inject, QueryList, viewChild, ViewChild, viewChildren, ViewChildren } from '@angular/core';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { ProductsList } from "../products-list/products-list";
import { StaticCategories } from '../../services/static-categories';

@Component({
  selector: 'app-order',
  imports: [FormsModule, ProductsList],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order implements AfterViewInit {
  selectedCatId: number = 0
  orderPrice: number = 0
  private categoriesSerive=inject(StaticCategories)
  categories:ICategory[]=this.categoriesSerive.getAllCategories()
  // @ViewChild('header') headerEle!: ElementRef
  // @ViewChildren('header') headersList!:QueryList<ElementRef>
  // @ViewChild(ProductsList) prdListComp!:ProductsList
// @ViewChildren(ProductsList) productsListCompList!:QueryList<ProductsList>

//  headerEle=viewChild<ElementRef>('header')
 headerEleList=viewChildren<ElementRef[]>('header')

//  constructor(private categoriesSerive:StaticCategories){
//   this.categories=this.categoriesSerive.getAllCategories()
//  }


  setOrderPrice(recievedTotalOrderPrice: number) {
    this.orderPrice = recievedTotalOrderPrice
  }

  ngAfterViewInit(): void {
  //  console.log(this.headersList.get(0));
    // console.log(this.prdListComp.totalOrderPrice);
   console.log(this.headerEleList());


  }
}
