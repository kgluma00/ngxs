import { Book } from './../models/book';

export class AddRemoveBook {
    static readonly type = '*Book* has been added/removed';
    constructor(public book: Book) { }
}

export class SaveBookForLater {
    static readonly type = '*Book* has been saved for later';
    constructor(public book: Book) { }
}
