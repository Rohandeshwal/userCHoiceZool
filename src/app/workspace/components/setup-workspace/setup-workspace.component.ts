import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-setup-workspace',
  templateUrl: './setup-workspace.component.html',
  styleUrls: ['./setup-workspace.component.scss']
})
export class SetupWorkspaceComponent implements OnInit {

  additionalContext: any [] = [];
  industryContext: any [] = [];
  productContext: any [] = [];
  geographyContext: any [] = [];
  brandContext: any [] = [];

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToHome(){
this.router.navigate(['/workspace/list'])
  }

  addContext(action){
    switch (action) {
      case 'additional':
        this.additionalContext.push(
          {
            context: "New Context Group*"
          },
          {
            context: "New Context Name*"
          },
        );
        break;

      case 'industry':
         this.industryContext.push(
           {
             context: "New Industry Context"
           },
           {
            context: "New Context Name*"
          },
         )
        break;
      case 'geography':
        this.geographyContext.push(
          {
            context: "New Geography Context"
          },
          {
            context: "New Context Name*"
          },
        )
        break;
      case 'product':
        this.productContext.push(
          {
            context: "New Product Context"
          },
          {
            context: "New Context Name*"
          },
        )
        break;
      case 'brand':
        this.brandContext.push(
          {
            context: "New Brand Context"
          },
          {
            context: "New Context Name*"
          },
        )
        break;
    }
    
  }

}
