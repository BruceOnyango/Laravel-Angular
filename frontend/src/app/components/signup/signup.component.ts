import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { JarwisService } from '../../Services/jarwis.service';
import { TokenService } from '../../Services/token.service';
import { ToastrService } from 'ngx-toastr';


// Define the type for errors
interface Error {
  name?: string[];
  email?: string[];
  password?: string[];
  [key: string]: any;
}
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  // Form data for signup
  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  }
  // Explicitly type the error property
  public error: Error = {};

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private toaster: ToastrService
  ) { }

  /**
  * Handles the form submission for signup.
  * Subscribes to the signup service and handles response and errors.
  */
  onSubmit() {
    return this.Jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  /**
   * Handles the successful response from the signup service.
   * @param data - The response data from the signup service.
   */
  handleResponse(data: any) {
    this.Token.handle(data)
    this.toaster.success(`welcome ${data.user}`)
    this.router.navigateByUrl('/profile');
  }

  /**
   * Handles errors from the signup service.
   * @param error - The error response from the signup service.
   */
  handleError(error: any) {
    this.error = error.error.errors;
    this.toaster.error(JSON.stringify(this.error))
  }

  isPasswordValid(): boolean {
    const password = this.form.password as unknown as string;
    return password !== null && password !== undefined && password.length >= 8;
  }
  
  

  ngOnInit(): void {

  }
}
