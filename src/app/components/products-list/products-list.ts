import { Component, effect, EventEmitter, inject, input, Input, OnChanges, OnInit, output, Output, signal, SimpleChanges } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms'
import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { ShortenPipe } from '../../pipes/shorten-pipe';
import { StaticProducts } from '../../services/static-products';
import { Router, RouterLink } from '@angular/router';
import { ProductsApi } from '../../services/products-api';
import { Base } from '../../services/base';
@Component({
  selector: 'app-products-list',
  imports: [FormsModule,CurrencyPipe,ShortenPipe, RouterLink],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList implements OnInit{
  private productsApiService = inject(ProductsApi)
  private baseService=inject(Base)
  private router=inject(Router)
  products=signal<IProduct[]>([])
  filteredProducts=signal<IProduct[]>([])
  isLoaded=signal<boolean>(false)
  totalOrderPrice: number = 0
  inpClass = 'bg-red-500'
  showLoader=signal<boolean>(false)
  sentCatId = input<number>(0)
  onTotalOrderPriceChanged = output<number>()

  constructor() {


    effect(() => {
      // this.filteredProducts = this.productsService.getProductsByCatId(this.sentCatId())
      this.productsApiService.getProductsByCatId(String(this.sentCatId())).subscribe({
        next:(res)=>{
          this.filteredProducts.set(res)
        },
        error:(err)=>{console.log(err);
        }
      })
    })
  }


  ngOnInit(): void {
    this.productsApiService.getAllProducts().subscribe({
      next:(res)=>{
        this.products.set(res);
        this.filteredProducts.set(res)
        this.isLoaded.set(true)
      },
      error:(err)=>{
        console.log(err);
      }
    })

    this.isLoagingState()
  }

  isLoagingState(){
   this.baseService.isLoading.subscribe((val)=>{
    this.showLoader.set(val)
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
