/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { UserActions } from '../actions/user';
import { AppState } from '../reducers';
import { UserService } from '../services/user';

@Injectable()

export class UserEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private userService: UserService,
    private userActions: UserActions
  ) { }

  @Effect() logout$ = this.actions$
    .ofType(UserActions.LOGOUT)
    .map(action => action.payload)
    .switchMap(() => this.userService.logout()
      .mergeMap((res: any) => Observable.of(
        this.userActions.logoutSuccess(res)
      )
      )
      .catch((err) => Observable.of(
        this.userActions.logoutFail(err)
      ))
    );

  @Effect() login$ = this.actions$
    .ofType(UserActions.LOGIN)
    .map(action => action.payload)
    .switchMap((payload) => this.userService.login(payload)
      .mergeMap((res: any) => Observable.of(
        this.userActions.loginSuccess(res)
      )).catch((err) => Observable.of(
        this.userActions.loginFail(err)
      ))
    )
}
