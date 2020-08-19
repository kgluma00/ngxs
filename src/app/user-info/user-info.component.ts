import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  profileForm = new FormGroup({
    username: new FormControl(''),
    nickname: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }
}
