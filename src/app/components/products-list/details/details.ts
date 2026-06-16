import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticProducts } from '../../../services/static-products';
import { IProduct } from '../../../models/iproduct';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  private activatedRoute = inject(ActivatedRoute)
  private productsService=inject(StaticProducts)
  id:number=0
  product=signal<IProduct|null>(null)

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id']
   this.product.set(this.productsService.getProductById(this.id))
   console.log(this.product());

  }
}
