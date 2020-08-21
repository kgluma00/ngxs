import { Component, OnInit } from '@angular/core';
import { AddRemoveUser } from '../actions/actions';
import { Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  profileForm = this.fb.group({
    username: [null, Validators.required],
    id: [null, Validators.required],
    nickname: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private store: Store, private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.store.dispatch(new AddRemoveUser({
      username: this.profileForm.value.username,
      nickname: this.profileForm.value.nickname,
      id: this.profileForm.value.id
    }));
    this.route.navigate(['/user-list']);
  }
}
