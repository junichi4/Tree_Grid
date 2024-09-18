import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Table1TypeSample } from '../models/sample/table1-type-sample';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  constructor(
    private http: HttpClient
  ) { }

  public getTable1(): Observable<Table1TypeSample | undefined> {
    return this.http.get<Table1TypeSample | undefined>("https://my-json-server.typicode.com/junichi4/mock_sample/db")
      .pipe(catchError(ErrorHandlerService.handleError<Table1TypeSample | undefined>('getTable1', undefined)));
  }
}
