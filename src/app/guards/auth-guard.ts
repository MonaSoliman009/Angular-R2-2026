import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {
  let authService=inject(Auth)
  let router=inject(Router)
  let loginStatus:boolean=false

  authService.getIsLoggedIn().subscribe((val)=>{
    loginStatus=val
  })
  if(!loginStatus){
    router.navigateByUrl('/auth/login')
    return false
  }
  return true;
};
