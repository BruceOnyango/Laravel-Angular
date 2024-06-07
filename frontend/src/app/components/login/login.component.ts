import { Component, OnInit, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { SnotifyService, ToastDefaults } from 'ng-snotify';
import { Router, RouterModule } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { JarwisService } from '../../Services/jarwis.service';
import { TokenService } from '../../Services/token.service';
import { AuthService } from '../../Services/auth.service';
import { Toaster } from 'ngx-toast-notifications';
import { ToastNotificationsModule } from 'ngx-toast-notifications';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  
})

export class LoginComponent implements OnInit{

  public form = {
    email: null,
    password: null
  }

  public error =  null;
  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    private toaster: ToastrService

   
  ) { }
 
  /**
   * Handles the form submission for login.
   * Subscribes to the login service and handles response and errors.
   */
  onSubmit() {
     //console.log("something")
    return this.Jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

   /**
   * Handles the successful response from the login service.
   * @param data - The response data from the login service.
   */
  handleResponse(data: any){
    this.Token.handle(data)
    this.Auth.changeAuthStatus(true);
    this.toaster.success('Successfully logged In!');
    this.router.navigateByUrl('/profile');
  }

  /**
   * Handles errors from the login service.
   * @param error - The error response from the login service.
   */
  handleError(error: { error: { error: null; }; }) {
    this.error = error.error.error;
    this.toaster.error(JSON.stringify(this.error))
  }
  ngOnInit(): void {
    
  }
}
