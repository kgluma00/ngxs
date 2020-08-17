import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddRemoveBook, SaveBookForLater } from '../actions/actions';
import { Book } from '../models/book';
import { Observable } from 'rxjs';
import { BookState } from '../states/book.state';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  constructor(private store: Store) { }
  book: Book = { name: '', DateOfRelease: '', ISBN: '' };
  savedBook: Book;
  submitted: boolean;


  ngOnInit(): void {
    this.store.select(BookState.getSavedBooks).subscribe(data => {
      this.savedBook = data;
    });
  }

  get diagnostic() { return JSON.stringify(this.book); }

  onSubmit() { this.submitted = true; }

  AddRemoveBook(name: string, isbn: string, dateOfRelease: string) {
    this.store.dispatch(new AddRemoveBook({ name, ISBN: isbn, DateOfRelease: dateOfRelease }));
  }

  SaveBookForLater(name: string, isbn: string, dateOfRelease: string) {
    this.store.dispatch(new SaveBookForLater({ name, ISBN: isbn, DateOfRelease: dateOfRelease }));
  }
}
