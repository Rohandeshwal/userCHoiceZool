import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Pages
import {LoginComponent} from './components/login/login.component';
import { OtpVerificationComponent } from './components/otp-verification/otp-verification.component';
import {RegisterComponent} from './components/register/register.component';
import { AuthComponent } from './components/auth/auth.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  { path: "", component:AuthComponent,children:[
    {path: "",redirectTo: "login", pathMatch: "full"},
    { path: "login", component: LoginComponent },
    { path: "otp-verification", component: OtpVerificationComponent },
    { path: "register", component: RegisterComponent },
    { path: "forgot-password", component: ForgotPasswordComponent },
    { path: "reset-password", component: ResetPasswordComponent }
  ]}

];
  

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AuthRoutingModule { }
