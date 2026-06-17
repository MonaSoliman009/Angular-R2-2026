import { Component, effect, EventEmitter, inject, input, Input, OnChanges, output, Output, SimpleChanges } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms'
import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { ShortenPipe } from '../../pipes/shorten-pipe';
import { StaticProducts } from '../../services/static-products';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-products-list',
  imports: [FormsModule,CurrencyPipe,ShortenPipe, RouterLink],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  private productsService = inject(StaticProducts)
  private router=inject(Router)
  products: IProduct[] = this.productsService.getAllProducts()
  filteredProducts: IProduct[]
  totalOrderPrice: number = 0
  inpClass = 'bg-red-500'
  sentCatId = input<number>(0)
  onTotalOrderPriceChanged = output<number>()

  constructor() {

    this.filteredProducts = this.products

    effect(() => {
      this.filteredProducts = this.productsService.getProductsByCatId(this.sentCatId())
    })
  }



  buy(price: number, quantity: string, evt: MouseEvent) {
    this.totalOrderPrice += price * +quantity
    //2- firing the event
    this.onTotalOrderPriceChanged.emit(this.totalOrderPrice)
  }

  // ngOnChanges(): void {
  //   this.filterProducts()
  // }
  navigateToDetails(id:number) {
  // this.router.navigateByUrl(`/details/${id}`)
  this.router.navigate(['/details',id])
  }

}
