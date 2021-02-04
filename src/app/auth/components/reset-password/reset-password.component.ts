import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms'
import { APPConfig } from 'src/app/configurations/app.config';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  appConfig = APPConfig;
  resetForm: FormGroup;
  submitted: boolean;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.resetForm = this.fb.group({
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required]
    })
  }

  onSubmit(){
    this.submitted = true;
  }

}
