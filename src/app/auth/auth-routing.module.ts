import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ConfirmEmailComponent } from './components/confirm-email/confirm-email.component';

const routes: Routes = [
	{path:'home', component:HomeComponent },
	{path:'login', component:LoginComponent },
	{path:'registration', component:RegistrationComponent },
	{path:'reset-password', component:ResetPasswordComponent },
	{path:'confirm-email', component:ConfirmEmailComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthRoutingModule { }
