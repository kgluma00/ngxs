import { Book } from './../models/book';
import { User } from '../models/User';

export class AddRemoveBook {
    static readonly type = '*Book* has been added/removed';
    constructor(public book: Book) { }
}

export class SaveBookForLater {
    static readonly type = '*Book* has been saved for later';
    constructor(public book: Book) { }
}

export class AddRemoveUser {
    static readonly type = '*User* has been added for later';
    constructor(public user: User) { }
}
