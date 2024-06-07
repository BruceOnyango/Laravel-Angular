import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import {ToastrService} from 'ngx-toastr'

import { NgToastModule } from 'ng-angular-popup' // to be added
//import { ToasterPosition } from 'ng-toasty';
//const ToasterPosition = require('ng-toasty');
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, NavbarComponent, RouterModule, NgToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 

 constructor(
  
) { }

}
