import { Injectable } from "@angular/core"
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { catchError, Observable, throwError } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class FoodService {
  readonly baseURL = `http://localhost:5000/api/v1`

  constructor(private httpClient: HttpClient) {}

  public getAll = (): Observable<any> => {
    const url  = `${this.baseURL}/foods`

    return this.httpClient.get<any>(url).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err);
      })
    );
  }

}
