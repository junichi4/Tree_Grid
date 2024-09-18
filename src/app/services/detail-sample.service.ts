import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Table1Type } from '../models/detail-sample/table1-type';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class DetailSampleService {
  constructor(
    private http: HttpClient
  ) { }

  public getTable1(): Observable<Table1Type | undefined> {
    return this.http.get<Table1Type | undefined>("https://my-json-server.typicode.com/junichi4/detail_sample/db")
      .pipe(catchError(ErrorHandlerService.handleError<Table1Type | undefined>('getTable1', undefined)));
  }
}
