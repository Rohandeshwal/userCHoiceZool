import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module Import
import {SharedModule} from './../shared/shared.module';
import {WorkspaceModule} from './../workspace/workspace.module';

// Components
import { LoginComponent } from './components/login/login.component';
import { OtpVerificationComponent } from './components/otp-verification/otp-verification.component';

// Routing Module
import {AuthRoutingModule} from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { AuthComponent } from './components/auth/auth.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


@NgModule({
  declarations: [LoginComponent, OtpVerificationComponent, RegisterComponent, AuthComponent, ForgotPasswordComponent, ResetPasswordComponent,],
  imports: [
    CommonModule,AuthRoutingModule, SharedModule,WorkspaceModule
  ]
})
export class AuthModule { }
