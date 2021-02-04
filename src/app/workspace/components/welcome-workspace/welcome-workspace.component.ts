import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-welcome-workspace',
  templateUrl: './welcome-workspace.component.html',
  styleUrls: ['./welcome-workspace.component.scss']
})
export class WelcomeWorkspaceComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  goToSetup(){
   this.router.navigate(['/workspace/create'])
  }

}
