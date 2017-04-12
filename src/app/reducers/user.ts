/* tslint:disable: no-switch-case-fall-through */
import { Action } from '@ngrx/store';

import { UserActions } from '../actions/user';
import { User } from '../models/user';

export interface UserState {
  user: User;
  loading: boolean;
  loaded: boolean;
};

export const initialState: UserState = {
  user: { name: 'Angular User' },
  loading: false,
  loaded: true,
};

export function userReducer(state = initialState, action: Action): UserState {
  switch (action.type) {
    case UserActions.EDIT_USER: {
      return Object.assign({}, state, {
        user: action.payload
      });
    }
    case UserActions.LOGIN: {
      let loading = { loading: true };
      return Object.assign({}, state, {
        user: Object.assign(loading, action.payload),
        action: action
      });
    }
    case UserActions.LOGOUT: {
      return Object.assign({}, state, {
        user: Object.assign({}, state),
        action: action.payload
      });
    }
    case UserActions.LOGIN_SUCCESS: {
      return Object.assign({}, state, {
        user: Object.assign({}, state, action.payload),
        action: action.payload
      });
    }
    case UserActions.LOGIN_FAIL: {
      let message = { error_message: JSON.parse(action.payload._body).error_message };
      return Object.assign({}, state, {
        user: Object.assign({}, state, message),
        action: action.payload
      });
    }

    default: {
      return state;
    }
  }
}
