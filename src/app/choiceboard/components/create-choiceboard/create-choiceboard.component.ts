import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from "@angular/router";
import { APPConfig } from 'src/app/configurations/app.config'

// Services
import {SharedService} from '../../../shared/services/shared.service';
@Component({
  selector: 'app-create-choiceboard',
  templateUrl: './create-choiceboard.component.html',
  styleUrls: ['./create-choiceboard.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class CreateChoiceboardComponent implements OnInit {
   appConfig = APPConfig;
   isChecked = false;
   choiceBoardName: any;

  modules  =  [
    {
      moduleIcon: "Value_Design.svg",
      moduleName: "Value Design"
    },
    {
      moduleIcon: "Opportunity_Patterns.svg",
      moduleName: "Opportunity Patterns"
   },
    {
       moduleIcon: "Audience_Design.svg",
       moduleName: "Audience Design"
    },
    {
       moduleIcon: "Business_Design.svg",
       moduleName: "Business Design"
    },
    {
      moduleIcon: "Value_Design.svg",
      moduleName: "Competitor Strategy Design"
    }
  ];

  
  constructor(
    config: NgbModalConfig, private modalService: NgbModal,
    private sharedService: SharedService,
    public router: Router
  ) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
  
  }

  getModuleName(value){
     this.choiceBoardName = value;
     this.isChecked = true;
  }

  scrollSessions(x, y) {
		document.getElementById('sessions').scrollBy(x, y);
  }

  routeTo(){
     this.sharedService.setNewCB(true);
     this.router.navigate(['/choiceboard/preview'], {queryParams: {choiceboard: this.choiceBoardName}});
  }

  openInfoModal(modalName){
     this.modalService.open(modalName)
  }
}
