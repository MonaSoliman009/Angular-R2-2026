import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  private router = inject(Router)
  private productsService = inject(StaticProducts)
  id: number = 0
  product = signal<IProduct | null>(null)

  ngOnInit(): void {
    // this.id=this.activatedRoute.snapshot.params['id']
    //  this.product.set(this.productsService.getProductById(this.id))

    this.activatedRoute.params.subscribe((params) => {
      this.product.set(this.productsService.getProductById(params['id']))
    })
  }

  navigateToPrd() {
    this.router.navigateByUrl('/details/2')
  }
}
