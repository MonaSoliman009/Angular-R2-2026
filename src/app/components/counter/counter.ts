import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  counter=signal<number>(0)
  doubleCounter=computed(()=>this.counter()*2)

  constructor(){
    effect(()=>{
      console.log(this.counter());

    })
  }

  increase(){
    // this.counter.set(this.counter()+1)
    this.counter.update((val)=>val+1)
  }

  decrease(){
    this.counter.update((val)=>val-1)
  }
}
