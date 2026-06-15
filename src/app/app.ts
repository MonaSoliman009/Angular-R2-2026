import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Order } from './components/order/order';


@Component({
  selector: 'app-root',
  imports: [Order,Navbar,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
  // template:`
  // <h1>Hello from ts file</h1>
  // `,
  // styles:[
  //   `h1{
  //     color: red;
  //   }`
  // ]
})
export class App {
  protected readonly title = signal('lec1');
}
