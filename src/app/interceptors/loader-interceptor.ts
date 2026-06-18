import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Base } from '../services/base';
import { finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  let baseService=inject(Base)
  baseService.showLoader()

 let modifiedReq= req.clone({
    setHeaders:{
      'Authorization':"jmdjfjrf"
    }
  })

  return next(modifiedReq).pipe(
    finalize(()=>{
      baseService.hideLoader()
    })
  );
};
