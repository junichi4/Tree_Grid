import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Table1TypeMenu } from '../models/menu/table1-type-menu';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(
    private http: HttpClient
  ) { }

  public getTable1(): Observable<Table1TypeMenu | undefined> {
    return this.http.get<Table1TypeMenu | undefined>("https://my-json-server.typicode.com/junichi4/menu/db")
      .pipe(catchError(ErrorHandlerService.handleError<Table1TypeMenu | undefined>('getTable1', undefined)));
  }
}
