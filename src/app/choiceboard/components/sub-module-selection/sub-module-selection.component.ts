import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

// Services
import {SharedService} from '../../../shared/services/shared.service';
@Component({
  selector: 'app-sub-module-selection',
  templateUrl: './sub-module-selection.component.html',
  styleUrls: ['./sub-module-selection.component.scss'],
  
})
export class SubModuleSelectionComponent implements OnInit {
  @Output() subModuleSelected = new EventEmitter();

  subModules = [
      {
        subModuleIcon: "./assets/images/category-individual.svg",
        subModuleName: "VALUE PROPOSITION"
      },
      {
         subModuleIcon: "./assets/images/category-individual.svg",
         subModuleName: "VALUE Transaction Types"
      },
      {
         subModuleIcon: "./assets/images/category-individual.svg",
         subModuleName: "Target Audience"
      },
      {
         subModuleIcon: "./assets/images/category-individual.svg",
         subModuleName: "Ecosystem Signals Audience"
      },
      {
        subModuleIcon: "./assets/images/category-individual.svg",
        subModuleName: "Business Model"
      },
      {
        subModuleIcon: "./assets/images/category-individual.svg",
        subModuleName: "Opportunity Design"
      },
      {
        subModuleIcon: "./assets/images/category-individual.svg",
        subModuleName: "Competitor Strategy"
      },
      {
        subModuleIcon: "./assets/images/category-individual.svg",
        subModuleName: "Ecosystem Signals"
      },
      {
        subModuleIcon: "./assets/images/category-individual.svg",
        subModuleName: "Brand Strategy"
      },
      {
        subModuleIcon: "./assets/images/category-individual.svg",
        subModuleName: "Business Constituents"
      },
    ];

  constructor(
    public router: Router,
    private sharedService: SharedService,
   ) {}

  ngOnInit() {
  }

  // openInfoModal(event){
  //   this.sharedService.openInfoModal(true);
  //   event.stopPropagation();
  //   event.preventDefault();
  // }

  routeTo(){
    this.subModuleSelected.emit(true);
  }

}
