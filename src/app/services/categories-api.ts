import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../models/icategory';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CategoriesApi {
  private httpClient = inject(HttpClient)
  apiUrl: string = `${environment.baseUrl}/categories`

  getAllCategories(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(this.apiUrl,{
      headers:{
        'Authorization':'hgefw55ewfn'
      }
    })
  }
}
