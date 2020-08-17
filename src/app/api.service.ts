import { Injectable } from '@angular/core';
import { Book } from './models/book';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public getBook(): Observable<Book> {
    return of({
      name: 'patkica',
      ISBN: 'mala',
      DateOfRelease: new Date().toISOString().slice(0, 10)
    });
  }
}
