import { Component, signal } from '@angular/core';
import { Home } from './components/home/home';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';


@Component({
  selector: 'app-root',
  imports: [Home,Navbar,Footer],
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
