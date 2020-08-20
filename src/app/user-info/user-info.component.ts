import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, Selector } from '@ngxs/store';
import { AddRemoveUser } from '../actions/actions';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  profileForm = this.fb.group({
    username: ['', Validators.required],
    id: ['', Validators.required],
    nickname: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.profileForm.value);

    this.store.dispatch(new AddRemoveUser({
      username: this.profileForm.value.username,
      nickname: this.profileForm.value.nickname,
      id: this.profileForm.value.id
    }));

  }
}
