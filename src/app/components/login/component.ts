import { Component, OnDestroy, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../reducers';
import { Store } from '@ngrx/store';
import { UserActions } from '../../actions/user';
import { User } from '../../models/user';

@Component({
  selector: 'my-login',
  templateUrl: './component.html',
  styleUrls: ['_component.scss']
})

export class LoginComponent implements OnDestroy, OnInit {
  destroyed$: Subject<any> = new Subject<any>();
  form: FormGroup;
  nameLabel = 'USER NAME';
  passwordLabel = 'PASSWORD';
  user: User;
  user$: Observable<User>;
  constructor(
    fb: FormBuilder,
    private store: Store<AppState>,
    private userActions: UserActions,
  ) {
    this.form = fb.group({
      name: '',
      passw: ''
    });

    this.user$ = this.store.select(state => state.user.user);
    this.user$.takeUntil(this.destroyed$)
      .subscribe(user => { this.user = user; });
  }

  ngOnInit() { }


  submitState() {
    this.store.dispatch(this.userActions.login(
      Object.assign({}, {
        email: this.form.get('name').value,
        password: this.form.get('passw').value
      })
    ));
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }
}
