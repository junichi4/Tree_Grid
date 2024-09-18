import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Table1TypeShop_sum } from '../models/shop-sum/table1-type-shop-sum';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ShopSumService {
  constructor(
    private http: HttpClient
  ) { }

  public getTable1(): Observable<Table1TypeShop_sum | undefined> {
    return this.http.get<Table1TypeShop_sum | undefined>("https://my-json-server.typicode.com/junichi4/shop_sum/db")
      .pipe(catchError(ErrorHandlerService.handleError<Table1TypeShop_sum | undefined>('getTable1', undefined)));
  }
}
