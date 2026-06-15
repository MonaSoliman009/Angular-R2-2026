import { Component } from '@angular/core';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { ProductsList } from "../products-list/products-list";

@Component({
  selector: 'app-order',
  imports: [FormsModule, ProductsList],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
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
  selectedCatId:number=0
  orderPrice:number=0

  setOrderPrice(recievedTotalOrderPrice:number){
    this.orderPrice=recievedTotalOrderPrice
  }
}
