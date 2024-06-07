import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../../Services/jarwis.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-request-reset',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './request-reset.component.html',
  styleUrl: './request-reset.component.css'
})
export class RequestResetComponent implements OnInit{

  // Form data for requesting password reset
  public form = {
    email: null
  };


  constructor(
    private Jarvis: JarwisService,
    private toaster: ToastrService 
  ) { }

  ngOnInit() {
  }

  /**
   * Handles the form submission for requesting password reset.
   * Subscribes to the sendPasswordResetLink service and handles response and errors.
   */
  onSubmit() {
  
    this.Jarvis.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.toaster.error(error.error.error)
    );
  }
 
  /**
   * Handles the successful response from the sendPasswordResetLink service.
   * @param res - The response data from the sendPasswordResetLink service.
   */
  handleResponse(res: any) {
    this.toaster.success(`${res.data}`)
    this.form.email = null;
  }  

}
