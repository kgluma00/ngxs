import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Book } from './../models/book';
import { AddRemoveBook, SaveBookForLater } from './../actions/actions';
import { Injectable, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

export class BookStateModel {
    books: Book[];
    booksForLater: Book;
}

@State<BookStateModel>({
    name: 'BookState',
    defaults: {
        books: [
            {
                name: 'aa',
                ISBN: 'bb',
                DateOfRelease: new Date().toISOString().slice(0, 10)
            }
        ],
        booksForLater: null,
    }
})

export class BookState {

    @Selector()
    static getBooks(books: BookStateModel) {
        return books.books;
    }
    @Selector()
    static getSavedBooks(books: BookStateModel) {
        return books.booksForLater;
    }

    @Action(AddRemoveBook)
    addBook(ctx: StateContext<BookStateModel>, action: AddRemoveBook) {
        const booksState = [...ctx.getState().books];
        const checkIfExists = booksState.findIndex(b => b.ISBN === action.book.ISBN);
        if (checkIfExists === -1) {
            booksState.push(action.book);
        }
        else {
            booksState.splice(checkIfExists, 1);
        }
        ctx.patchState({
            books: booksState
        });
    }

    @Action(SaveBookForLater)
    saveBookForLater(ctx: StateContext<BookStateModel>, action: SaveBookForLater) {
        ctx.patchState({
            booksForLater: action.book
        });
    }

}
