import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Cart } from '../cart/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private http = inject(HttpClient);

  private apiUrl = environment.apiUrl;


  getCart():Observable<Cart[]>{
    return this.http.get<Cart[]>(`${this.apiUrl}/cart`);

  }

  addToCart(cart:Omit<Cart, 'id'>):Observable<Cart>
{
    return this.http.post<Cart>(`${this.apiUrl}/cart`, cart);
}

  removeFromCart(id: number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/cart/4{id}`)
  }

  updateQuantity(id: number, quantity: number):Observable<Cart>{
    return this.http.patch<Cart>(`${this.apiUrl}/cart/${id}`, quantity)
  }
}
