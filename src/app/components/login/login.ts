import { Component, inject, OnInit, signal } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit{
  private authService=inject(Auth)
  isLoggedIn=signal<boolean>(false)

  ngOnInit(){
    this.authService.getIsLoggedIn().subscribe({
      next:(isLoggedin)=>{this.isLoggedIn.set(isLoggedin)}
    })
  }

  login(){
    this.authService.login("mona","1234")
  }

  logout(){
    this.authService.logOut()
  }
}
