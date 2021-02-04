import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { APPConfig } from 'src/app/configurations/app.config';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.scss']
})
export class OtpVerificationComponent implements OnInit {
  appConfig = APPConfig;
  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }
  
  routeToWelcome(){
    this.router.navigate(['/on-board/user-info']);
  }
}
