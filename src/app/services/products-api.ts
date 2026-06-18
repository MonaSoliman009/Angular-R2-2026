import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsApi {
  private httpClient = inject(HttpClient)
  apiUrl: string = `${environment.baseUrl}/products`


  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.apiUrl)
  }

  getProductById(id: string): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${this.apiUrl}/${id}`)
  }

  getProductsByCatId(catId: string): Observable<IProduct[]> {
    // return this.httpClient.get<IProduct[]>(`${this.apiUrl}?catId=${catId}`)
    return this.httpClient.get<IProduct[]>(this.apiUrl, {
      params: {
        catId: catId
      }
    })

  }

  addNewProduct(prd: IProduct): Observable<IProduct> {
    return this.httpClient.post<IProduct>(this.apiUrl, JSON.stringify(prd), {
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  updatePrdById(id: string, prd: IProduct): Observable<IProduct> {
    return this.httpClient.patch<IProduct>(`${this.apiUrl}/${id}`, JSON.stringify(prd))
  }

  deletePrdById(id:string):Observable<IProduct>{
   return this.httpClient.delete<IProduct>(`${this.apiUrl}/${id}`)
  }

}
