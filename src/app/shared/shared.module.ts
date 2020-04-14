import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnOneComponent } from './layout/column-one/column-one.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Router } from '@angular/router';
import { ColumnTwoComponent } from './layout/column-two/column-two.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [
    ColumnOneComponent, 
    HeaderComponent, 
    ColumnTwoComponent, 
    ContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ColumnOneComponent,
    ColumnTwoComponent,
    HeaderComponent,
    ContainerComponent,
    
  ]
})
export class SharedModule { }
