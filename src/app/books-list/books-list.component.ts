import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddRemoveBook } from '../actions/actions';
import { Book } from '../models/book';
import { Observable } from 'rxjs';
import { BookState } from '../states/book.state';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.books$ = this.store.select(BookState.getBooks);
  }

  AddRemoveBook(name: string, isbn: string, dateOfRelease: string) {
    this.store.dispatch(new AddRemoveBook({ name, ISBN: isbn, DateOfRelease: dateOfRelease }));
  }
}
