import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AddRemoveBook, SaveBookForLater } from '../actions/actions';
import { Book } from '../models/book';
import { Observable, Subscription } from 'rxjs';
import { BookState, BookStateModel } from '../states/book.state';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit, OnDestroy {

  book: Book = { name: '', DateOfRelease: '', ISBN: '' };
  subs: Subscription;
  constructor(private store: Store, private route: Router) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.subs = this.store.select(BookState.getSavedBooks).subscribe(data => {
      console.log('Data: ', data);
      if (data) {
        this.book = data;
      }
    });
  }

  AddRemoveBook(name: string, isbn: string, dateOfRelease: string) {
    this.store.dispatch(new AddRemoveBook({ name, ISBN: isbn, DateOfRelease: dateOfRelease }));
  }

  SaveBookForLater(name: string, isbn: string, dateOfRelease: string) {
    this.store.dispatch(new SaveBookForLater({ name, ISBN: isbn, DateOfRelease: dateOfRelease }));
    this.route.navigate(['/book-list']);
  }
}
