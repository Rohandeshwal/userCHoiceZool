import { Component, OnInit } from '@angular/core';

import { APPConfig } from 'src/app/configurations/app.config'
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  appConfig = APPConfig;
  constructor() { }

  ngOnInit() {
  }

}
