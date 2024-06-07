import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // BehaviorSubject to hold the logged-in status of the user
  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());

  // Observable to subscribe to the authentication status changes
  authStatus = this.loggedIn.asObservable();

   /**
   * Changes the authentication status.
   * @param value - The new authentication status (true if logged in, false if logged out).
   */
  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }

  constructor(private Token: TokenService) { }
}
