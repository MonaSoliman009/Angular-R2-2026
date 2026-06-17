import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  login(userName:string,password:string){
    //api
    localStorage.setItem('token','jkdfkvj5785mnfvbn');
    this.isLoggedIn.next(true)
  }

  logOut(){
    localStorage.removeItem('token')
    this.isLoggedIn.next(false)
  }

  getIsLoggedIn(){
    return this.isLoggedIn
  }


}
