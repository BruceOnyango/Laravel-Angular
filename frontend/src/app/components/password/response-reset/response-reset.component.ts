import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JarwisService } from '../../../Services/jarwis.service';
import { ToastrService } from 'ngx-toastr';

// Define the type for errors
interface Error {
  name?: string[];
  email?: string[];
  password?: string[];
  password_confirmation?: string[];
  [key: string]: any;
}

@Component({
  selector: 'app-response-reset',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './response-reset.component.html',
  styleUrl: './response-reset.component.css'
})
export class ResponseResetComponent implements OnInit{
  
   // Explicitly type the error property
 public error: Error = {};

  // Form data for password reset
  public form = {
    email : null,
    password : null,
    password_confirmation:null,
    resetToken :null
  }
  constructor(
    private route:ActivatedRoute,
    private Jarwis: JarwisService,
    private router:Router,
    private toaster: ToastrService
    
  ) { 
    // Retrieve the reset token from the query parameters
    route.queryParams.subscribe(params => {
      this.form.resetToken = params['token']
    });
  }

  /**
   * Handles the form submission for password reset.
   * Subscribes to the changePassword service and handles response and errors.
   */
  onSubmit(){
   this.Jarwis.changePassword(this.form).subscribe(
     data => this.handleResponse(data),
     error => this.handleError(error)
   )
  }

  /**
   * Handles the successful response from the changePassword service.
   * @param data - The response data from the changePassword service.
   */
  handleResponse(data: Object){

    let _router = this.router;
    this.toaster.success('Password Successfully Changed')
    this.router.navigateByUrl('/login');
    
  }
  /**
   * Handles errors from the changePassword service.
   * @param error - The error response from the changePassword service.
   */
  handleError(error: any){
    this.error = error.error.errors;
  }
  ngOnInit() {
  }

}
