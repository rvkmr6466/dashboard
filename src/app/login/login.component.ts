import { Component, OnInit } from '@angular/core';
import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MDCRipple} from '@material/ripple';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 

}