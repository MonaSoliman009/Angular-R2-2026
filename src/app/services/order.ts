import { ElementRef, Injectable } from '@angular/core';
import { from, fromEvent, Observable, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Order {
  orderStauses: string[] = [
    "📦 Order Confirmed",
    "📦 Preparing",
    // "",
    "📦 Out for delivery",
    "📦 Delivered"
  ]


  getOrderStatus():Observable<string>{
  return  new Observable((observer) => {
      // observer.next(20)
      // observer.error(err)
      // observer.complete()
      let counter = 0
     let interval= setInterval(() => {
        if (counter == this.orderStauses.length) {
          observer.complete()
        }
        if (this.orderStauses[counter] == "") {
          observer.error('Error: Status is empty')
        }
        observer.next(this.orderStauses[counter])
        counter++
        console.log("Test.....");

      }, 2000)

      return {
        unsubscribe(){
           clearInterval(interval)
        }
      }
    })
  }


  getReadyObservable(ele:ElementRef){
    // return of(1,2,3,4)
    // return from([10,20,30,40])
    // return from(new Promise((res,rej)=>{
    //   setTimeout(()=>{
    //     rej('error in api')
    //   },2000)
    // }))
    return fromEvent(ele.nativeElement,'click')
    // return timer(2000,1000)
    /*
    of(...val){
    return new observable((observer)=>{
    for(let i=0;i<val.length,i++){
        observer.next(val[i])
    }
    observer.complete()
    })
    }

    */
  }
}
