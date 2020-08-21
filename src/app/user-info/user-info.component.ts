import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../models/User';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { UserState } from '../states/user.state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;
  User: User;

  constructor(private route: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params.id;
      if (this.id) {
        this.store.select(UserState.getUser).pipe(map(filter => filter(this.id))).subscribe(data => {
          this.User = data;
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
