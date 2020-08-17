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
  savedBook: Book;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.books$ = this.store.select(BookState.getBooks);
    this.store.select(BookState.getSavedBooks).subscribe(data => {
      this.savedBook = data;
    });
    console.log('Saved books', this.savedBook);
  }

  AddRemoveBook(name: string, isbn: string, dateOfRelease: string) {
    this.store.dispatch(new AddRemoveBook({ name, ISBN: isbn, DateOfRelease: dateOfRelease }));
  }

  bookInfo(bookName: string) {
    console.log('bookName: ', bookName);
  }
}
