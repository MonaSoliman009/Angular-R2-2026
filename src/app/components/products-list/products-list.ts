import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import {FormsModule} from '@angular/forms'
import { NgClass, NgStyle } from '@angular/common';
@Component({
  selector: 'app-products-list',
  imports: [FormsModule, NgClass,NgStyle],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  products: IProduct[] = [
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
  categories: ICategory[] = [
    {
      id: 1,
      name: "Electronics"
    },
    {
      id: 2,
      name: "Clothing"
    },
    {
      id: 3,
      name: "Stationery"
    }
  ];

  totalOrderPrice: number = 0
  selectedCatId:number=2
  inpClass='bg-red-500'

  buy(price: number, quantity: string, evt: MouseEvent) {
    console.log(evt);

    this.totalOrderPrice += price * +quantity
  }
}
