import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { BookState } from './states/book.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AddBookComponent } from './add-book/add-book.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserState } from './states/user.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserListComponent } from './user-list/user-list.component';
import { routingComponents, AppRoutingModule } from './app-routing.module';
import { UserAddComponent } from './user-add/user-add.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UserAddComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([
      BookState,
      UserState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    // RouterModule.forRoot([
    //   { path: 'book-list', component: BooksListComponent },
    //   { path: 'add-book', component: AddBookComponent },
    //   { path: 'book-info/:ISBN', component: BookInfoComponent },
    //   { path: 'user-list', component: UserListComponent },
    //   { path: '', redirectTo: '/book-list', pathMatch: 'full' },
    // ]),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
