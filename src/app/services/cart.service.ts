import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
// import { any } from '../model/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient) {
  }


  public addItems = (item: any): Observable<any> => {
    const url  = `http://localhost:4000/api/v1/cart`

    return this.httpClient.post<any>(url, {item: item}).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err);
      })
    );
  }

  public getCartItems = (): Observable<any> => {
    const url  = `http://localhost:4000/api/v1/current_cart_items`

    return this.httpClient.get<any>(url).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err);
      })
    );
  }
}
