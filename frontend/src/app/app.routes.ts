// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'; // adjust the path as necessary
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { AfterLoginService } from './Services/after-login.service';
import { BeforeLoginService } from './Services/before-login.service';

export const routes: Routes = [
    {
      path: '',
      component: LoginComponent,
      canActivate: [BeforeLoginService]
    },
    {
      path: 'login',
      component: LoginComponent,
      canActivate: [BeforeLoginService]
    },
    {
      path: 'signup',
      component: SignupComponent,
      canActivate: [BeforeLoginService]
    },
    {
      path: 'profile',
      component: ProfileComponent,
      canActivate: [AfterLoginService]
    },
    {
      path: 'request-password-reset',
      component: RequestResetComponent,
      canActivate: [BeforeLoginService]
    },
    {
      path: 'response-password-reset',
      component: ResponseResetComponent,
      canActivate: [BeforeLoginService]
    },
  ];
