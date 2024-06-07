import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  // URLs for login and signup endpoints
  private iss = {
    login: 'http://localhost:8000/api/auth/login',
    signup: 'http://localhost:8000/api/auth/signup'
  };

  constructor() { }

   /**
   * Handles the token by setting it in local storage.
   * @param token - The token object containing access_token and user.
   */
  handle(token: any) {
    this.set(token.access_token, token.user);
   
  }

  /**
   * Sets the token and user in local storage.
   * @param token - The access token.
   * @param user - The user information.
   */
  set(token: string, user: string) {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('token', token);
      localStorage.setItem('user', user);
    }
  }

   /**
   * Retrieves the token from local storage.
   * @returns The access token or null if local storage is not available.
   */
  get() {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem('token');

    }
    return null;
  }

  /**
   * Removes the token and user from local storage.
   */
  remove() {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }

   /**
   * Checks if the token is valid by comparing the payload issuer with known issuers.
   * @returns True if the token is valid, otherwise false.
   */
  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1;
      }
    }
    return false;
  }

   /**
   * Decodes the token and returns its payload.
   * @param token - The access token.
   * @returns The payload of the token.
   */
  payload(token: string) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  /**
   * Decodes a base64-encoded string.
   * @param payload - The base64-encoded string.
   * @returns The decoded object.
   */
  decode(payload: string) {
    try {
      return JSON.parse(atob(payload));
    } catch (e) {
      console.error('Failed to decode payload:', e);
      return null;
    }
   
  }

  /**
   * Checks if the user is logged in by validating the token.
   * @returns True if the user is logged in, otherwise false.
   */
  loggedIn() {
    return this.isValid();
  }

  /**
   * Checks if local storage is available.
   * @returns True if local storage is available, otherwise false.
   */
  private isLocalStorageAvailable(): boolean {
    try {
      const test = '__localStorage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }
}
