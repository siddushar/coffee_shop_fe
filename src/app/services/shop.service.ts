import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs/internal/Subject';
import { Observable, catchError, throwError } from 'rxjs';
import { IShop } from '../model/shop';
import { ICartItem } from '../model/cart-item';

@Injectable({
  providedIn: 'root'
})
export class ShopService {


  private url: string = 'http://localhost:4000/api/v1/shops';
  public hasUserName = false;
  public userName = '';
  public cartItems: any = [];
  public customError = {
    status: 500,
    message: 'Sorry! Something went wrong :('
  }

  userNameChange: Subject<string> = new Subject<string>();

  cartItemsChange$ = new Subject<any>();

  constructor(private httpClient: HttpClient) {
   }

  public getShopsList = (): Observable<IShop[]> => {
    return this.httpClient.get<any>(this.url).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err || this.customError);
      })
    );
  }

  public setUserName = (name: any) => {
    this.userNameChange.next(name);
  }

  public setCartItem = (item: any) => {
    // this.cartItemsChange.next(item);
    this.cartItems.push(item);
    this.cartItemsChange$.next(this.cartItems);
  }

  public removeCartItem = (item: ICartItem) => {
    this.cartItems = this.cartItems.filter((menu: any) => menu.id != item.id);
  }
}
