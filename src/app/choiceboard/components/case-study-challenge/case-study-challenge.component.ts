import { Component, OnInit } from '@angular/core';

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { APPConfig } from 'src/app/configurations/app.config';

@Component({
  selector: 'app-case-study-challenge',
  templateUrl: './case-study-challenge.component.html',
  styleUrls: ['./case-study-challenge.component.scss']
})
export class CaseStudychallengeComponent implements OnInit {
  hideAddBtn: boolean;
  selectedModuleIndex: any;
  selectedModuleName = "Select Module";
  subModuleSelectedName = "Select Sub Module";
  selectedBCName = "Select Business Component"
  selectedParent: any;
  subModuleSelection: boolean = false;
  appConfig =APPConfig;

  modules = [
    {
      moduleIcon: APPConfig.imgSrc.root+"/category-individual.svg",
      moduleName: "Brand Strategy"
    },
    {
      moduleIcon: APPConfig.imgSrc.root+"/category-individual.svg",
      moduleName: "VALUE Transaction Types"
    },
    {
      moduleIcon: APPConfig.imgSrc.root+"/category-individual.svg",
      moduleName: "Target Audience"
    },
    {
      moduleIcon: APPConfig.imgSrc.root+"/category-individual.svg",
      moduleName: "VALUE PROPOSITION"
    },
    {
      moduleIcon: APPConfig.imgSrc.root+"/category-individual.svg",
      moduleName: "Business Model"
    },
    {
      moduleIcon: APPConfig.imgSrc.root+"/category-individual.svg",
      moduleName: "Opportunity Design"
    },
    {
      moduleIcon: APPConfig.imgSrc.root+"/category-individual.svg",
      moduleName: "Competitor Strategy"
    },
    {
        moduleIcon: APPConfig.imgSrc.root+"/category-individual.svg",
        moduleName: "Ecosystem Signals Audience"
    },
    {
      moduleIcon: APPConfig.imgSrc.root+"/category-individual.svg",
      moduleName: "Business Constituents"
    },
    {
      moduleIcon: APPConfig.imgSrc.root+"/category-individual.svg",
      moduleName: "Ecosystem Signals"
    },
  ];

  subModules = [
    {
      subModuleIcon: APPConfig.imgSrc.root+"/category-individual.svg",
      subModuleName: "VALUE PROPOSITION"
    },
    {
       subModuleIcon: APPConfig.imgSrc.root+"/category-individual.svg",
       subModuleName: "VALUE Transaction Types"
    },
    {
       subModuleIcon: APPConfig.imgSrc.root+"/category-individual.svg",
       subModuleName: "Target Audience"
    },
    {
       subModuleIcon: APPConfig.imgSrc.root+"/category-individual.svg",
       subModuleName: "Ecosystem Signals Audience"
    },
    {
      subModuleIcon: APPConfig.imgSrc.root+"/category-individual.svg",
      subModuleName: "Business Model"
    },
    {
      subModuleIcon: APPConfig.imgSrc.root+"/category-individual.svg",
      subModuleName: "Opportunity Design"
    },
    {
      subModuleIcon: APPConfig.imgSrc.root+"/category-individual.svg",
      subModuleName: "Competitor Strategy"
    },
    {
      subModuleIcon: APPConfig.imgSrc.root+"/category-individual.svg",
      subModuleName: "Ecosystem Signals"
    },
    {
      subModuleIcon: APPConfig.imgSrc.root+"/category-individual.svg",
      subModuleName: "Brand Strategy"
    },
    {
      subModuleIcon: APPConfig.imgSrc.root+"/category-individual.svg",
      subModuleName: "Business Constituents"
    },
  ];

  businessComp = [
    {
      businessCompIcon: APPConfig.imgSrc.root+"/category-individual.svg",
      businessCompName: "VALUE PROPOSITION"
    },
    {
       businessCompIcon: APPConfig.imgSrc.root+"/category-individual.svg",
       businessCompName: "VALUE Transaction Types"
    },
    {
       businessCompIcon: APPConfig.imgSrc.root+"/category-individual.svg",
       businessCompName: "Target Audience"
    },
    {
       businessCompIcon: APPConfig.imgSrc.root+"/category-individual.svg",
       businessCompName: "Ecosystem Signals Audience"
    },
    {
      businessCompIcon: APPConfig.imgSrc.root+"/category-individual.svg",
      businessCompName: "Business Model"
    },
    {
      businessCompIcon: APPConfig.imgSrc.root+"/category-individual.svg",
      businessCompName: "Opportunity Design"
    },
    {
      businessCompIcon: APPConfig.imgSrc.root+"/category-individual.svg",
      businessCompName: "Competitor Strategy"
    },
    {
      businessCompIcon: APPConfig.imgSrc.root+"/category-individual.svg",
      businessCompName: "Ecosystem Signals"
    },
    {
      businessCompIcon: APPConfig.imgSrc.root+"/category-individual.svg",
      businessCompName: "Brand Strategy"
    },
    {
      businessCompIcon: APPConfig.imgSrc.root+"/category-individual.svg",
      businessCompName: "Business Constituents"
    },
  ];
  questionList = [
    {
      number: 1,
      question: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy ?",
      selected: false,
      options:[{
        businessComp: [
          {
            component:""
          } 
        ],
        priority: [
          {
                item: "High"
              },
              {
                item: "Medium"
              },
              {
                item: "Low"
              }
        ]
      }
      ]
    },

    {
      number: 2,
      question: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy ?",
      selected: false,
      options:[{
        businessComp: [
          {
            component:""
          }
        ],
        priority: [
          {
                item: "High"
              },
              {
                item: "Medium"
              },
              {
                item: "Low"
              }
        ]
      }
      ]
    },

    {
      number: 3,
      question: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy ?",
      selected: false,
      options:[{
        businessComp: [
          {
            component:""
          }
        ],
        priority: [
          {
                item: "High"
              },
              {
                item: "Medium"
              },
              {
                item: "Low"
              }
        ]
      }
      ]
    },

    {
      number: 4,
      question: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy ?",
      selected: false,
      options:[
        {
          businessComp: [
          {
            component:""
          }
          ],
          priority: [
            {
                  item: "High"
                },
                {
                  item: "Medium"
                },
                {
                  item: "Low"
                }
          ]
        }
      ]
    },
    
  ]
  selectedVal: any;
  selectedObj: any;
  showSubModule: boolean;
  modalHeading = "Select Module";
  showBC: boolean;
  selectedBC: any;
  childInd: any;
  parentIndex: any;
  subChildInd: any;
  

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  // removeRow(index, childInd){
  // this.questionList[index].options.splice( childInd, 1);

  // }

  // addRow(index){
  //   console.log(index);
  //   this.questionList[index].options.push({
  //     businessComp: [
  //       {
  //             name: "Value Proposition"
  //           },
  //           {
  //             name: "Business Modal"
  //           },
  //           {
  //             name: "Opportunity Design"
  //           },
  //           {
  //             name: "Organisation Development"
  //           }
  //     ],
  //     priority: [
  //       {
  //             item: "High"
  //           },
  //           {
  //             item: "Medium"
  //           },
  //           {
  //             item: "Low"
  //           }
  //     ]
  //   })
  // }

  
  // getIndex(index){
  //   this.selectedModuleIndex = index;
  // }


  addContext(parentInd){
    let bussComp = {
      businessComp: [
      {
        component:""
      }
      ],
      priority: [
            {
              item: "High"
            },
            {
              item: "Medium"
            },
            {
              item: "Low"
            }
      ]
    };
    this.questionList[parentInd].options.push(bussComp);
  }

  openList(modalName,parentInd, childIndex, subChildInd){
    console.log(parentInd, childIndex, subChildInd)
    this.parentIndex = parentInd;
    this.childInd = childIndex;
    this.subChildInd = subChildInd
    this.modalService.open(modalName);
  }

  selectModule(module){
    // this.selectedModuleIndex = index;
    this.showSubModule = true;
    this.modalHeading = "Select Sub Module";
  }

  selectSubModule(submodule){
    this.showSubModule = false;
    this.showBC = true;
    this.modalHeading = "Select Business Components";
  }

  selectBCs(businessComp){
    console.log(businessComp, "selected BCs");
    this.selectedBC = businessComp;
  }

  subModuleSelected(modalName){
    this.modalService.dismissAll(modalName);
    this.questionList[this.parentIndex].options[this.childInd].businessComp[this.subChildInd].component = this.selectedBC.businessCompName;
    console.log(this.questionList[this.parentIndex].options[this.childInd].businessComp[this.subChildInd].component);
    
    // switch (this.selectedVal) {
    //   case 'moduleSelection':    
    //     this.questionList[this.selectedParent].selected = true;   
    //     this.selectedModuleName = this.subModules[index].subModuleName;
    //     break;
    //   case 'subModuleSelection':
    //     this.subModuleSelection = true;
    //     this.subModuleSelectedName = this.subModules[index].subModuleName;
    //     break;
    //   case 'bcSelection':
    //     this.selectedBCName = this.subModules[index].subModuleName;
    //     break;
    // } 
  }

}
