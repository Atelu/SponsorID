import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule,  MatCardModule, MatProgressSpinnerModule, MatIconModule, MatCheckboxModule,
  MatInputModule, MatButtonModule } from '@angular/material/';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule, MatFormFieldModule,  MatCardModule, MatProgressSpinnerModule, MatIconModule, MatCheckboxModule,
    MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule
  ]
})
export class LoginModule { }
