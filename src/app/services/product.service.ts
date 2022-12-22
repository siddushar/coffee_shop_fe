import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable, catchError, throwError } from 'rxjs';
import { IShop } from '../model/shop';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = 'http://localhost:4000/api/v1/shops';
  public hasUserName = false;
  public userName = '';
  public cartItems = [];
  public customError = {
    status: 500,
    message: 'Sorry! Something went wrong :('
  }

  userNameChange: Subject<string> = new Subject<string>();

  // cartItemsChange: Subject<ICartItem[]> = new Subject<ICartItem[]>();

  constructor(private httpClient: HttpClient) {
   }

  public getMenus = (id: any): Observable<any> => {
    let url  = "http://localhost:4000/api/v1/shop/" + id + "/get_menu"
    return this.httpClient.get<any>(url).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err || this.customError);
      })
    );
  }
}
