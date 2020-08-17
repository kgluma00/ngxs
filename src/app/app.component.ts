import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Store } from '@ngxs/store';
import { AddRemoveBook } from './actions/actions';
import { Book } from './models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NGXS-App';

  constructor(private bookService: ApiService, private store: Store) { }
  ngOnInit(): void {
    this.CallApi();
  }

  CallApi() {
    this.bookService.getBook().subscribe(d => {
      const book: Book = d;
      this.store.dispatch(new AddRemoveBook({ name: book.name, ISBN: book.ISBN, DateOfRelease: book.DateOfRelease }));
    });
  }
}
