import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TokenService } from '../../Services/token.service';
import { JarwisService } from '../../Services/jarwis.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  // Variable to hold user information
  user = localStorage.getItem("user") ? localStorage.getItem("user") : null ;// Variable to hold user information
  
  constructor(private tokenService: TokenService,  private Jarwis: JarwisService,) {}

  ngOnInit(): void {
   
  }

 
}
