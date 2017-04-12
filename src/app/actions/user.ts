/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Action } from '@ngrx/store';

import { User } from '../models/user';

@Injectable()

export class UserActions {

  static EDIT_USER = '[User] Edit User';
  editUser(user: User): Action {
    return {
      type: UserActions.EDIT_USER,
      payload: user
    };
  }

  static LOGIN = '[User] Login';
  login(user: User): Action {
    return {
      type: UserActions.LOGIN,
      payload: user
    };
  }

  static LOGIN_FAIL = '[User] Login Fail';
  loginFail(err: Error): Action {
    return {
      type: UserActions.LOGIN_FAIL,
      payload: err
    };
  }

  static LOGIN_SUCCESS = '[User] Login Success';
  loginSuccess(res: Response): Action {
    return {
      type: UserActions.LOGIN_SUCCESS,
      payload: res
    };
  }

  static LOGOUT = '[User] Logout';
  logout(): Action {
    return {
      type: UserActions.LOGOUT
    };
  }

  static LOGOUT_FAIL = '[User] Logout Fail';
  logoutFail(err: Error): Action {
    return {
      type: UserActions.LOGOUT_FAIL,
      payload: err
    };
  }

  static LOGOUT_SUCCESS = '[User] Logout Success';
  logoutSuccess(res: Response): Action {
    return {
      type: UserActions.LOGOUT_SUCCESS,
      payload: res
    };
  }
}
