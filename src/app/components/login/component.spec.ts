/* tslint:disable: max-line-length */
import { TestBed, getTestBed, async, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import 'rxjs/add/operator/takeUntil';

import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule, Store } from '@ngrx/store';
import { UserActions } from '../../actions/user';
import { User } from '../../models/user';
import { userReducer } from '../../reducers/user';

import { LoginComponent } from './component';



describe('Login Component', () => {
  let userActions: UserActions;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        FormsModule, ReactiveFormsModule,
        StoreModule.provideStore(userReducer)
      ],
      providers: [UserActions]
    });
  });
  beforeEach(inject([UserActions], (_userActions: UserActions) => {
    userActions = _userActions;
  }));

  it('should create a login component', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.debugElement.componentInstance;
    expect(login).toBeTruthy();
  }));

  it('should content property with text USERNAME', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.debugElement.componentInstance;
    expect(login.nameLabel).toBe('USER NAME');
  }));

  it('should content property with text PASSWORD', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.debugElement.componentInstance;
    expect(login.passwordLabel).toBe('PASSWORD');
  }));

  it('should have method submitState', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.debugElement.componentInstance;
    expect(login.submitState).toBeTruthy();
  }));

  it('should have member form with name and passw properties', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.debugElement.componentInstance;
    expect(login.form._value.name).not.toBeUndefined();
    expect(login.form._value.passw).not.toBeUndefined();
  }));

});
