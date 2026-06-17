import { Component, effect, ElementRef, inject, OnDestroy, OnInit, viewChild } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { Order } from '../../services/order';
import { filter, map, Subscription, take, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  private orderService = inject(Order)
  subscribtion!: Subscription
  headerEle = viewChild<ElementRef>('header')

  constructor() {
    effect(() => {
      let header = this.headerEle()
      if (header) {
        this.orderService.getReadyObservable(header).subscribe({
          next: (val) => { console.log(val+" Subscriber 1"); },
          error: (err) => { console.log(err); },
          complete: () => {
            console.log("Completed ........");
          }
        }
        )

        setTimeout(() => {
          this.orderService.getReadyObservable(header).subscribe({
            next: (val) => { console.log(val + " subscriber 2"); },
            error: (err) => { console.log(err); },
            complete: () => {
              console.log("Completed ........");
            }
          }
          )
        }, 5000)
      }
    })
  }
  ngOnInit(): void {
    // this.subscribtion = this.orderService.getOrderStatus().pipe(
    //   filter((val) => !val.includes('delivery')),
    //   map((val) => val + "Subscriber 1"),
    //   take(2),
    //   tap(() => {
    //     console.log('new value emited');
    //   })
    // ).subscribe({
    //   next: (val) => { console.log(val); },
    //   error: (err) => { console.log(err); },
    //   complete: () => {
    //     console.log("Completed ........");
    //   }
    // })


    // setTimeout(() => {
    // this.orderService.getOrderStatus().pipe(
    //     filter((val) => !val.includes('delivery')),
    //     map((val) => val + "Subcriber 2"),
    //     take(2),
    //     tap(() => {
    //       console.log('new value emited');
    //     })
    //   ).subscribe({
    //     next: (val) => { console.log(val); },
    //     error: (err) => { console.log(err); },
    //     complete: () => {
    //       console.log("Completed ........");
    //     }
    //   })
    // }, 2000)

    // this.orderService.getReadyObservable().subscribe({
    //   next: (val) => { console.log(val); },
    //   error: (err) => { console.log(err); },
    //   complete: () => {
    //     console.log("Completed ........");}
    //   })
  }

  getMsg(): string {
    return "Hello world"
  }

  ngOnDestroy(): void {
    // this.subscribtion.unsubscribe()
  }
}
