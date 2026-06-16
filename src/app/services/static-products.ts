import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProducts {

  private products: IProduct[] = [
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

  getAllProducts(): IProduct[] {
    return this.products;
  }

  getProductById(id: number): IProduct | null {
    let prd = this.products.find((prd) => prd.id == id)
    return (prd) ? prd : null
  }

  getProductsByCatId(catId:number):IProduct[]{
    if(catId==0){
      return this.products
    }
    return this.products.filter((prd)=>prd.catId==catId)
  }
}
