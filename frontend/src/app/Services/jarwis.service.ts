import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  
  // Base URL for the authentication API endpoints
  private baseUrl = 'http://localhost:8000/api/auth';

  constructor(private http: HttpClient) { }

  /**
   * Sends a signup request to the API.
   * @param data - The signup data containing email, name, password, and password confirmation.
   * @returns An Observable of the HTTP response.
   */
  signup(data: { email: null; name: null; password: null; password_confirmation: null; }) {
    return this.http.post(`${this.baseUrl}/signup`, data)
  }

  /**
   * Sends a login request to the API.
   * @param data - The login data containing email and password.
   * @returns An Observable of the HTTP response.
   */
  login(data: { email: null; password: null; }) {
    return this.http.post(`${this.baseUrl}/login`, data)
  }

  /**
   * Sends a password reset link request to the API.
   * @param data - The data containing the email address for password reset.
   * @returns An Observable of the HTTP response.
   */
  sendPasswordResetLink(data: any) {
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data)
  }
  
  /**
   * Sends a password change request to the API.
   * @param data - The data containing the new password and password reset token.
   * @returns An Observable of the HTTP response.
   */
  changePassword(data: any) {
    return this.http.post(`${this.baseUrl}/resetPassword`, data)
  }

  /**
   * Sends a request to get the authenticated user's information.
   * @param data - The data containing the access token.
   * @returns An Observable of the HTTP response.
   */
  user(data: any){
    return this.http.post(`${this.baseUrl}/me`, data)
  }

}
