import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Table1TypeShop } from '../models/shop/table1-type-shop';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  constructor(
    private http: HttpClient
  ) { }

  public getTable1(): Observable<Table1TypeShop | undefined> {
    return this.http.get<Table1TypeShop | undefined>("https://my-json-server.typicode.com/junichi4/shop/db")
      .pipe(catchError(ErrorHandlerService.handleError<Table1TypeShop | undefined>('getTable1', undefined)));
  }
}
