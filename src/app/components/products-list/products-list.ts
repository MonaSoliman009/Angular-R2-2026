import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import {FormsModule} from '@angular/forms'
import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { ShortenPipe } from '../../pipes/shorten-pipe';
@Component({
  selector: 'app-products-list',
  imports: [FormsModule,Highlight,UpperCasePipe,LowerCasePipe,TitleCasePipe,
    CurrencyPipe , DatePipe ,JsonPipe,ShortenPipe
  ],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList implements OnChanges{
  products: IProduct[]
  filteredProducts:IProduct[]
   d:Date=new Date()
  totalOrderPrice: number = 0
  inpClass='bg-red-500'
  @Input('sentCatId') recievedCatId:number=0
  //1- define the event
  @Output() onTotalOrderPriceChanged:EventEmitter<number>=new EventEmitter<number>()

  constructor(){
  this.products= [
    {
      id: 1,
      name: "Laptop",
      imgUrl: "https://fastly.picsum.photos/id/842/200/200.jpg?hmac=RW9iEgAYLKwoinQWSz_zrZHyOwmVEgqvoZTPebkRGMM",
      price: 1200,
      quantity: 10,
      catId: 1
    },
    {
      id: 2,
      name: "Mouse",
      imgUrl: "https://picsum.photos/200?random=2",
      price: 25,
      quantity: 0,
      catId: 1
    },

    {
      id: 3,
      name: "T-Shirt",
      imgUrl: "https://picsum.photos/200?random=3",
      price: 30,
      quantity: 1,
      catId: 2
    },
    {
      id: 4,
      name: "Jeans",
      imgUrl: "https://picsum.photos/200?random=4",
      price: 70,
      quantity: 25,
      catId: 2
    },

    {
      id: 5,
      name: "Coffee Mug",
      imgUrl: "https://picsum.photos/200?random=5",
      price: 12,
      quantity: 0,
      catId: 3
    },
    {
      id: 6,
      name: "Notebook",
      imgUrl: "https://picsum.photos/200?random=6",
      price: 8,
      quantity: 100,
      catId: 3
    }
  ];
  this.filteredProducts=this.products
  }



  buy(price: number, quantity: string, evt: MouseEvent) {
    this.totalOrderPrice += price * +quantity
    //2- firing the event
    this.onTotalOrderPriceChanged.emit(this.totalOrderPrice)
  }

  ngOnChanges(): void {
    this.filterProducts()
  }

  filterProducts(){
    if(this.recievedCatId==0){
       this.filteredProducts=this.products
       return;
    }
    this.filteredProducts=this.products.filter((prd)=>prd.catId==this.recievedCatId)
  }
}
