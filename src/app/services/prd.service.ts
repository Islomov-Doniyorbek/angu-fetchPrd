import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { ProductList } from '../product-list/product-list';
import { Prd } from '../models/prd';

@Injectable({
  providedIn: 'root',
})
export class PrdService {

  private http = inject(HttpClient)
  private url = environment.apiUrl

  getPrds():Observable<Prd[]>{
    return this.http.get<Prd[]>(`${this.url}/products`)
  }

  constructor(){

  }
}
