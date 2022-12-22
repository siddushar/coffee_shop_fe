import { Injectable } from "@angular/core"
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { catchError, Observable, throwError } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class OrderService {
  readonly baseURL = `http://localhost:5000/api/v1/orders`

  constructor(private httpClient: HttpClient) {}

  create(dishes: any[]): Observable<any> {
    return this.httpClient.post<any>(
      this.baseURL,
      { items: dishes }
    )
  }
}
