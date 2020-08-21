import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddRemoveUser } from '../actions/actions';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { UserStateModel, UserState } from '../states/user.state';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;


  constructor(private store: Store) { }

  ngOnInit(): void {
    this.users$ = this.store.select(UserState.getUsers);
  }

  AddRemoveUser(idUser: number) {
    this.store.dispatch(new AddRemoveUser({ id: idUser, username: '', nickname: '' }));
  }
}
