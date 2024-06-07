import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AfterLoginService } from './Services/after-login.service';
import { AuthService } from './Services/auth.service';
import { BeforeLoginService } from './Services/before-login.service';
import { JarwisService } from './Services/jarwis.service';
import { TokenService } from './Services/token.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService,  } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    FormBuilder, FormGroup, Validators 
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,//provideHttpClient(withInterceptorsFromDi())
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [ ToastrService,JarwisService, TokenService, AuthService, AfterLoginService, BeforeLoginService,
    
],
  bootstrap: [AppComponent],
  //schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
