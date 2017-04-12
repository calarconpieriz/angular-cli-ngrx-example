/* tslint:disable: member-ordering */
import { TestBed, async } from '@angular/core/testing';
import { Response, ResponseOptions } from '@angular/http';
import { UserActions } from './user';
import {} from 'jasmine';

describe('User Actions', () => {
  let userAction;
  beforeEach(() => {
    userAction = new UserActions();
  });
  it('should return object with type "[User] Edit User"', async(() => {
    const user = {};
    const action = userAction.editUser(user);
    expect(action.type).toBe('[User] Edit User');
    expect(action.payload).toEqual(user);
  }));

  it('should return object with type "[User] Login"', async(() => {
    const user = {};
    const action = userAction.login(user);
    expect(action.type).toBe('[User] Login');
    expect(action.payload).toEqual(user);
  }));

  it('should return object with type "[User] Login Fail"', async(() => {
    const error: Error = new Error();
    const action = userAction.loginFail(error);
    expect(action.payload).toEqual(error);
  }));

  it('should return object with type "[User] Login Success"', async(() => {
    const respOpt: ResponseOptions = new ResponseOptions({});
    const resp: Response = new Response(respOpt);
    const action = userAction.loginSuccess(resp);
    expect(action.type).toBe('[User] Login Success');
    expect(action.payload).toEqual(resp);
  }));

  it('should return object with type "[User] Logout"', async(() => {
    const action = userAction.logout({});
    expect(action.type).toBe('[User] Logout');
  }));

  it('should return object with type "[User] Logout Fail"', async(() => {
    const error: Error = new Error();
    const action = userAction.logoutFail(error);
    expect(action.type).toBe('[User] Logout Fail');
    expect(action.payload).toEqual(error);
  }));

  it('should return object with type "[User] Logout Success"', async(() => {
    const respOpt: ResponseOptions = new ResponseOptions({});
    const resp: Response = new Response(respOpt);
    const action = userAction.logoutSuccess(resp);
    expect(action.type).toBe('[User] Logout Success');
    expect(action.payload).toEqual(resp);
  }));
});
