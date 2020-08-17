import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Book } from '../models/book';
import { BookState } from '../states/book.state';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent implements OnInit, OnDestroy {

  ISBN: string;
  private sub: any;
  book: Book;

  constructor(private route: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.ISBN = params.ISBN;
      if (this.ISBN) {
        this.store.select(BookState.getBooks).subscribe(data => {
          this.book = data.filter(i => i.ISBN === this.ISBN)[0];
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
