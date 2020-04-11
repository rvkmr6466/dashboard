import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'login', component:LoginComponent },
  {path:'registration', component:RegistrationComponent },
  {path:'reset-password', component:ResetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
