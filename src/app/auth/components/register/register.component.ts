import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    public router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
       username: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(6)] ],
       confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  routeToOTP(event){
      this.router.navigate(['../otp-verification']);
  }

}
