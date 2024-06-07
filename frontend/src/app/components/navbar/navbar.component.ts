import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { TokenService } from '../../Services/token.service';
import { CommonModule } from '@angular/common'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ 
    RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public loggedIn: boolean = false;

  constructor(
    private Auth: AuthService,
    private router: Router,
    private Token: TokenService,
    private toaster: ToastrService
  ) { }

  ngOnInit() {
     // Subscribe to the authentication status changes
    this.Auth.authStatus.subscribe((value: boolean) => this.loggedIn = value);
  }

  /**
   * Logs out the user by removing the token and changing the authentication status.
   * @param event - The MouseEvent triggered by the logout button click.
   */
  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();// Remove the token from local storage
    this.Auth.changeAuthStatus(false); // Change the authentication status
    this.toaster.success('Successfully logged Out!');
    this.router.navigateByUrl('/login');
}
}
