import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from '@shared/shared.module';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationComponent } from './authentication.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthenticationComponent, AuthFormComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
