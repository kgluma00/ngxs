import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { userInfo } from 'os';
import { UserInfoComponent } from './user-info/user-info.component';


const routes: Routes = [
  { path: 'add-book', component: AddBookComponent },
  { path: 'book-list', component: BooksListComponent },
  { path: 'book-info/:ISBN', component: BookInfoComponent },
  { path: 'user-add', component: UserAddComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-info/:id', component: UserInfoComponent },
  { path: '', redirectTo: '/book-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [BooksListComponent, AddBookComponent, BookInfoComponent, UserListComponent, UserAddComponent, UserInfoComponent];
