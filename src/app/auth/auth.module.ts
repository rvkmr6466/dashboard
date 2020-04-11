import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    RegistrationComponent, 
    ResetPasswordComponent, 
    LoginComponent, 
    HomeComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports: [
    RegistrationComponent, 
    ResetPasswordComponent,
    LoginComponent,
    HomeComponent
  ],
    
})
export class AuthModule { }
