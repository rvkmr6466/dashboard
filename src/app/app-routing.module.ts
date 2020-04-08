import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLoginComponent } from './dashboard-login/dashboard-login.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path:'index', component:LoginComponent},
  { path: 'dashboard', component:DashboardLoginComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

