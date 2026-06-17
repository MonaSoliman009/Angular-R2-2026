import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit{
  private authService=inject(Auth)
   isLoggedIn=signal<boolean>(false)

  ngOnInit(): void {
   this.authService.getIsLoggedIn().subscribe((val)=>{
    this.isLoggedIn.set(val)
   })
  }
}
