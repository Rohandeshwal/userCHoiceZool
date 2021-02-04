import { Component, OnInit, ViewChild, OnDestroy, ElementRef } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ActivatedRoute } from "@angular/router";
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';
import { APPConfig } from 'src/app/configurations/app.config';

// Services
import { SharedService } from "../../../shared/services/shared.service";

// Dummy Master JSON File
import * as  masterData from "../../../shared/masterData.json";

// All the Modals Component imported here
import { ShareComponent } from "../../../shared/components/share/share.component";
import { SlateTitleComponent } from "../../components/slate-title/slate-title.component";
import { ObjectInfoComponent } from "../../components/object-info/object-info.component";
import { SlateCommentsComponent } from "../../components/slate-comments/slate-comments.component";
import { SlateNotesComponent } from "../../components/slate-notes/slate-notes.component";
import { element } from 'protractor';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: "app-choiceboard-preview",
  templateUrl: "./choiceboard-preview.component.html",
  styleUrls: ["./choiceboard-preview.component.scss"],
  providers: [NgbAccordionConfig]
})
export class ChoiceboardPreviewComponent implements OnInit, OnDestroy {
  appConfig = APPConfig;
  @ViewChild("subModuleModal", { static: true }) subModuleModal: ElementRef;
  notesForm: FormGroup;
  addBCForm: FormGroup;
  slideIndex: any = 0;
  commentState: boolean;
  currentSlate: number = 0;

  sharedState: boolean;
  splitIndex = 0;
  p: number = 1;
  q: number = 1;
  r: number = 1;
  headerState: any;
  newCB: any;
  choiceBoard: any;
  choiceBoardName: string;
  subModuleList: boolean;
  selectedSM: any[] = [];
  parentSM: any;
  selectedSMIndex = -1;
  masterData: any[] = [];
  bcNotes: any[] = [];
  slates: any[] = [];
  slateBreadCrumb: any[] = [];
  selectedSubModule: any;
  panelId: any;
  dropData: any;
  draggedData: any[];
  addSlotToSlate: boolean;
  disableContinuebtn: boolean;
  slateTitle: any;
  panelIdGroup: any[] = [];
  accordianIndex = -1;

  @ViewChild('shareModal', { static: false }) shareModal: any;
  splitArray = [
    "d-flex main-container split0",
    "d-flex main-container split1",
    "d-flex main-container split2",
    "d-flex main-container split3"
  ];
  currentSplit = this.splitArray[this.splitIndex];

  // businessCompList = [
  //   {
  //     businessCompIcon: "./assets/images/category-individual.svg",
  //     businessCompName: "Value Design"
  //   },
  //   {
  //     businessCompIcon: "./assets/images/category-individual.svg",
  //     businessCompName: "Audience Design"
  //   },
  //   {
  //     businessCompIcon: "./assets/images/category-individual.svg",
  //     businessCompName: "Opportunity Design"
  //   },
  //   {
  //     businessCompIcon: "./assets/images/category-individual.svg",
  //     businessCompName: "Business Design"
  //   },
  //   {
  //     businessCompIcon: "./assets/images/category-individual.svg",
  //     businessCompName: "Competitor Strategy Design"
  //   },
  //   {
  //     businessCompIcon: "./assets/images/category-individual.svg",
  //     businessCompName: "Value Design"
  //   },
  //   {
  //     businessCompIcon: "./assets/images/category-individual.svg",
  //     businessCompName: "Audience Design"
  //   },
  //   {
  //     businessCompIcon: "./assets/images/category-individual.svg",
  //     businessCompName: "Opportunity Design"
  //   },
  //   {
  //     businessCompIcon: "./assets/images/category-individual.svg",
  //     businessCompName: "Business Design"
  //   },
  //   {
  //     businessCompIcon: "./assets/images/category-individual.svg",
  //     businessCompName: "Value Design"
  //   },
  //   {
  //     businessCompIcon: "./assets/images/category-individual.svg",
  //     businessCompName: "Audience Design"
  //   },
  //   {
  //     businessCompIcon: "./assets/images/category-individual.svg",
  //     businessCompName: "Opportunity Design"
  //   },
  //   {
  //     businessCompIcon: "./assets/images/category-individual.svg",
  //     businessCompName: "Business Design"
  //   },
  //   {
  //     businessCompIcon: "./assets/images/category-individual.svg",
  //     businessCompName: "Competitor Strategy Design"
  //   },
  //   {
  //     businessCompIcon: "./assets/images/category-individual.svg",
  //     businessCompName: "Value Design"
  //   },
  //   {
  //     businessCompIcon: "./assets/images/category-individual.svg",
  //     businessCompName: "Audience Design"
  //   },
  //   {
  //     businessCompIcon: "./assets/images/category-individual.svg",
  //     businessCompName: "Opportunity Design"
  //   },
  //   {
  //     businessCompIcon: "./assets/images/category-individual.svg",
  //     businessCompName: "Business Design"
  //   }
  // ];

  // subModules = [
  //   {
  //     subModuleIcon: "./assets/images/category-individual.svg",
  //     subModuleName: "Value Proposition",
  //     subModuleLevel2: [
  //       {
  //         subModuleIcon: "./assets/images/category-individual.svg",
  //         subModuleName: "Business Model",
  //       },

  //       {
  //         subModuleIcon: "./assets/images/category-individual.svg",
  //         subModuleName: "Competitor Strategy"
  //       }

  //     ]
  //   },
  //   {
  //     subModuleIcon: "./assets/images/category-individual.svg",
  //     subModuleName: "Value Transaction Types",
  //     subModuleLevel2: [
  //       {
  //         subModuleIcon: "./assets/images/category-individual.svg",
  //         subModuleName: "Ecosystem Signals Audience",
  //       },

  //       {
  //         subModuleIcon: "./assets/images/category-individual.svg",
  //         subModuleName: "Target Audience"
  //       }

  //     ]
  //   },
  //   {
  //     subModuleIcon: "./assets/images/category-individual.svg",
  //     subModuleName: "Target Audience",
  //     subModuleLevel2: [
  //       {
  //         subModuleIcon: "./assets/images/category-individual.svg",
  //         subModuleName: "Ecosystem Signals Audience",
  //       },

  //       {
  //         subModuleIcon: "./assets/images/category-individual.svg",
  //         subModuleName: "Business Model"
  //       }

  //     ]
  //   },
  //   {
  //     subModuleIcon: "./assets/images/category-individual.svg",
  //     subModuleName: "Ecosystem Signals Audience",
  //     subModuleLevel2: [
  //       {
  //         subModuleIcon: "./assets/images/category-individual.svg",
  //         subModuleName: "Opportunity Design",
  //       },

  //       {
  //         subModuleIcon: "./assets/images/category-individual.svg",
  //         subModuleName: "Target Audience"
  //       }

  //     ]
  //   },
  //   {
  //     subModuleIcon: "./assets/images/category-individual.svg",
  //     subModuleName: "Business Model",
  //     subModuleLevel2: [
  //       {
  //         subModuleIcon: "./assets/images/category-individual.svg",
  //         subModuleName: "Target Audience"
  //       }

  //     ]
  //   },
  //   {
  //     subModuleIcon: "./assets/images/category-individual.svg",
  //     subModuleName: "Opportunity Design",
  //     subModuleLevel2: [
  //       {
  //         subModuleIcon: "./assets/images/category-individual.svg",
  //         subModuleName: "Business Model",
  //       },

  //       {
  //         subModuleIcon: "./assets/images/category-individual.svg",
  //         subModuleName: "Target Audience"
  //       }

  //     ]
  //   },
  //   {
  //     subModuleIcon: "./assets/images/category-individual.svg",
  //     subModuleName: "Competitor Strategy",
  //     subModuleLevel2: [
  //       {
  //         subModuleIcon: "./assets/images/category-individual.svg",
  //         subModuleName: "Ecosystem Signals Audience",
  //       },

  //       {
  //         subModuleIcon: "./assets/images/category-individual.svg",
  //         subModuleName: "Target Audience"
  //       }

  //     ]
  //   },
  //   {
  //     subModuleIcon: "./assets/images/category-individual.svg",
  //     subModuleName: "Ecosystem Signals",
  //     subModuleLevel2: [
  //       {
  //         subModuleIcon: "./assets/images/category-individual.svg",
  //         subModuleName: "Ecosystem Signals Audience",
  //       },
  //     ]
  //   },
  //   {
  //     subModuleIcon: "./assets/images/category-individual.svg",
  //     subModuleName: "Brand Strategy",
  //     subModuleLevel2: [
  //       {
  //         subModuleIcon: "./assets/images/category-individual.svg",
  //         subModuleName: "Target Audience"
  //       }
  //     ]
  //   },
  //   {
  //     subModuleIcon: "./assets/images/category-individual.svg",
  //     subModuleName: "Business Constituents",
  //     subModuleLevel2: [
  //       {
  //         subModuleIcon: "./assets/images/category-individual.svg",
  //         subModuleName: "Brand Strategy",
  //       },
  //     ]
  //   },
  // ];

  compList = [
    {
      objects: [
        {
          value: "Business Component 1"
        },
        {
          value: "Business Component 2"
        },
        {
          value: "Business Component 3"
        },
        {
          value: "Business Component 4"
        }
      ],
    }
  ]

  nodes = [
    {
      "id": 1,
      "name": "Value Proposition",
      "level": 1,
      "icon": "./assets/images/category-individual.svg",
      "children": [
        {
          "id": 2,
          "name": "WHAT CUSTOMER PROBLEMS/NEEDS ARE YOU SOLVING?",
          "level": 2,
          "icon": "./assets/images/category-individual.svg",
          "children": [
            {
              "id": 3,
              "name": "REASONABLE PRICE",
              "level": "bc",
              "icon": "./assets/images/category-individual.svg"
            }
          ]
        },
        {
          "id": 4,
          "name": "WHAT ARE CUSTOMERS LOOKING FOR? - CUST VALUE DRIVERS",
          "level": 2,
          "icon": "./assets/images/category-individual.svg",
          "children": [
            {
              "id": 5,
              "name": "FROM CURRENT OFFERINGS",
              "level": 3,
              "icon": "./assets/images/category-individual.svg",
              "children": [
                {
                  "id": 6,
                  "name": "PRICE",
                  "level": "bc",
                  "icon": "./assets/images/category-individual.svg"
                },
                {
                  "id": 7,
                  "name": "RELEVANCE",
                  "level": "bc",
                  "icon": "./assets/images/category-individual.svg"
                },
                {
                  "id": 8,
                  "name": "SERVICE",
                  "level": "bc",
                  "icon": "./assets/images/category-individual.svg"
                }
              ]
            },
            {
              "id": 9,
              "name": "FROM FUTURE OFFERINGS",
              "level": 3,
              "icon": "./assets/images/category-individual.svg",
              "children": [
                {
                  "id": 10,
                  "name": "ALL CURRENT OFFERING VALUE DRIVERS",
                  "level": "bc",
                  "icon": "./assets/images/category-individual.svg"
                },
                {
                  "id": 11,
                  "name": "UNMET NEEDS",
                  "level": "bc",
                  "icon": "./assets/images/category-individual.svg"
                }
              ]
            }
          ]
        },
        {
          "id": 12,
          "name": "DEFINING ELEMENTS OF VALUE FOR YOUR OFFERING",
          "level": 2,
          "icon": "./assets/images/category-individual.svg",
          "children": [
            {
              "id": 13,
              "name": "B2C BUSINESS TYPE",
              "level": 3,
              "icon": "./assets/images/category-individual.svg",
              "children": [
                {
                  "id": 14,
                  "name": "BASIC (HARD) FACTORS",
                  "level": 4,
                  "icon": "./assets/images/category-individual.svg",
                  "children": [
                    {
                      "id": 15,
                      "name": "SAVES TIME",
                      "level": "bc",
                      "icon": "./assets/images/category-individual.svg"
                    },
                    {
                      "id": 16,
                      "name": "SIMPLIFIES",
                      "level": "bc",
                      "icon": "./assets/images/category-individual.svg"
                    },
                    {
                      "id": 17,
                      "name": "REDUCES RISK",
                      "level": "bc",
                      "icon": "./assets/images/category-individual.svg"
                    }
                  ]
                },
                {
                  "id": 18,
                  "name": "SOFT FACTORS",
                  "level": 4,
                  "icon": "./assets/images/category-individual.svg",
                  "children": [
                    {
                      "name": "REDUCES ANXIETY",
                      "level": "bc",
                      "icon": "./assets/images/category-individual.svg"
                    },
                    {
                      "name": "REWARDS ME",
                      "level": "bc",
                      "icon": "./assets/images/category-individual.svg"
                    },
                    {
                      "name": "NOSTALGIA",
                      "level": "bc",
                      "icon": "./assets/images/category-individual.svg"
                    }
                  ]
                },
                {
                  "id": 19,
                  "name": "LIFE ALTERING",
                  "level": 4,
                  "icon": "./assets/images/category-individual.svg",
                  "children": [
                    {
                      "id": 20,
                      "name": "PROVIDES HOPE",
                      "level": "bc",
                      "icon": "./assets/images/category-individual.svg"
                    },
                    {
                      "id": 21,
                      "name": "SELF ACTUALISATION",
                      "level": "bc",
                      "icon": "./assets/images/category-individual.svg"
                    },
                    {
                      "id": 22,
                      "name": "MOTIVATION",
                      "level": "bc",
                      "icon": "./assets/images/category-individual.svg"
                    }
                  ]
                },
                {
                  "id": 23,
                  "name": "SOCIAL IMPACT",
                  "level": 4,
                  "icon": "./assets/images/category-individual.svg",
                  "children": [
                    {
                      "id": 24,
                      "name": "SELF TRANSCENDENCE",
                      "level": "bc",
                      "icon": "./assets/images/category-individual.svg"
                    },
                    {
                      "id": 25,
                      "name": "ENVIRONMENT",
                      "level": "bc",
                      "icon": "./assets/images/category-individual.svg"
                    },
                    {
                      "id": 26,
                      "name": "COMMUNITY",
                      "level": "bc",
                      "icon": "./assets/images/category-individual.svg"
                    }
                  ]
                }
              ]
            },
            {
              "id": 27,
              "name": "B2B BUSINESS TYPE",
              "level": 3,
              "icon": "./assets/images/category-individual.svg",
              "childrens": [
                {
                  "id": 28,
                  "name": "BASIC REQUIREMENTS",
                  "level": 4,
                  "icon": "./assets/images/category-individual.svg",
                  "children": [
                    {
                      "id": 29,
                      "name": "CONFORMS TO PRE-REQUISITES",
                      "level": "bc",
                      "icon": "./assets/images/category-individual.svg"
                    },
                    {
                      "id": 30,
                      "name": "COMPLIANCE",
                      "level": "bc",
                      "icon": "./assets/images/category-individual.svg"
                    }
                  ]
                },
                {
                  "id": 31,
                  "name": "UTILITARIAN VALUE - PERFORMANCE FEATURES",
                  "level": 4,
                  "icon": "./assets/images/category-individual.svg",
                  "children": [
                    {
                      "id": 32,
                      "name": "QUALITY",
                      "level": "bc",
                      "icon": "./assets/images/category-individual.svg"
                    }
                  ]
                },
                {
                  "id": 33,
                  "name": "UTILITARIAN VALUE - FINANCIAL FEATURES",
                  "level": 4,
                  "icon": "./assets/images/category-individual.svg",
                  "children": [
                    {
                      "id": 34,
                      "name": "REVENUE IMPACT",
                      "level": "bc",
                      "icon": "./assets/images/category-individual.svg"
                    }
                  ]
                },
                {
                  "id": 35,
                  "name": "COLLABORATIVE VALUE - EFFICIENCY FEATURES",
                  "level": 4,
                  "icon": "./assets/images/category-individual.svg",
                  "children": [
                    {
                      "id": 36,
                      "name": "SAVES TIME",
                      "level": "bc",
                      "icon": "./assets/images/category-individual.svg"
                    },
                    {
                      "id": 37,
                      "name": "REDUCES EFFORT",
                      "level": "bc",
                      "icon": "./assets/images/category-individual.svg"
                    }
                  ]
                },
                {
                  "id": 38,
                  "name": "COLLABORATIVE VALUE - CHOICE FEATURES",
                  "level": 4,
                  "icon": "./assets/images/category-individual.svg",
                  "children": [
                    {
                      "id": 39,
                      "name": "AVAILABILITY",
                      "level": "bc",
                      "icon": "./assets/images/category-individual.svg"
                    }
                  ]
                },
                {
                  "id": 40,
                  "name": "COLLABORATIVE VALUE - DEPENDABILITY FEATURES",
                  "level": 4,
                  "icon": "./assets/images/category-individual.svg",
                  "children": [
                    {
                      "id": 41,
                      "name": "RESPONSIVE",
                      "level": "bc",
                      "icon": "./assets/images/category-individual.svg"
                    },
                    {
                      "id": 42,
                      "name": "CAPABILITY",
                      "level": "bc",
                      "icon": "./assets/images/category-individual.svg"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": 43,
          "name": "HOW ARE YOU CREATING VALUE? - VALUE CREATION MODELS",
          "level": 2,
          "icon": "./assets/images/category-individual.svg",
          "childrens": [
            {
              "id": 44,
              "name": "STRENGTHEN",
              "level": 3,
              "icon": "./assets/images/category-individual.svg",
              "children": [
                {
                  "id": 45,
                  "name": "ADD NEW ATTRIBUTES",
                  "level": "bc",
                  "icon": "./assets/images/category-individual.svg"
                },
                {
                  "id": 46,
                  "name": "ADD BASED ON PRICE DISCOVERY",
                  "level": "bc",
                  "icon": "./assets/images/category-individual.svg"
                }
              ]
            },
            {
              "id": 47,
              "name": "SHRINK",
              "level": 3,
              "icon": "./assets/images/category-individual.svg",
              "children": [
                {
                  "id": 48,
                  "name": "BASED ON CUSTOMER NEED",
                  "level": "bc",
                  "icon": "./assets/images/category-individual.svg"
                }
              ]
            },
            {
              "id": 49,
              "name": "CUSTOMISE",
              "level": 3,
              "icon": "./assets/images/category-individual.svg",
              "children": [
                {
                  "id": 50,
                  "name": "REDUCE EXPENSIVE UNUSED FEATURES",
                  "level": "bc",
                  "icon": "./assets/images/category-individual.svg"
                }
              ]
            }
          ]
        },
        {
          "id": 51,
          "name": "HOW ARE YOU DELIVERING VALUE? - VALUE OFFERING MODELS",
          "level": 2,
          "icon": "./assets/images/category-individual.svg",
          "children": [
            {
              "id": 52,
              "name": "CUSTOM PRODUCT/SERVICE MODEL",
              "level": "bc",
              "icon": "./assets/images/category-individual.svg"
            },
            {
              "id": 53,
              "name": "MANY FOR ALL MODEL",
              "level": "bc",
              "icon": "./assets/images/category-individual.svg"
            }
          ]
        }
      ]
    },
    {
      "id": 54,
      "name": "TRANSACTION TYPES",
      "level": 1,
      "icon": "./assets/images/category-individual.svg",
      "children": [
        {
          "id": 55,
          "name": "REASONABLE PRICE",
          "level": "bc",
          "icon": "./assets/images/category-individual.svg"
        },
        {
          "id": 56,
          "name": "SERVICES SALE",
          "level": "bc",
          "icon": "./assets/images/category-individual.svg"
        },
        {
          "id": 57,
          "name": "COMPLETE OFFERING SALE",
          "level": "bc",
          "icon": "./assets/images/category-individual.svg"
        },
        {
          "id": 58,
          "name": "FREE",
          "level": "bc",
          "icon": "./assets/images/category-individual.svg"
        },
        {
          "id": 59,
          "name": "LESS MONEY",
          "level": "bc",
          "icon": "./assets/images/category-individual.svg"
        },
        {
          "id": 60,
          "name": "MORE MONEY",
          "level": "bc",
          "icon": "./assets/images/category-individual.svg"
        }
      ]
    },
    {
      "id": 61,
      "name": "BUSINESS CONSTITUENTS",
      "level": 1,
      "icon": "./assets/images/category-individual.svg",
      "children": [
        {
          "id": 62,
          "name": "SUPPLY PARTNERS",
          "level": "2",
          "icon": "./assets/images/category-individual.svg",
          "children": [
            {
              "id": 63,
              "name": "INVENTOR",
              "level": "bc",
              "icon": "./assets/images/category-individual.svg"
            },
            {
              "id": 64,
              "name": "PRODUCER",
              "level": "bc",
              "icon": "./assets/images/category-individual.svg"
            }
          ]
        },
        {
          "id": 65,
          "name": "SALES CHANNEL",
          "level": "2",
          "icon": "./assets/images/category-individual.svg",
          "children": [
            {
              "id": 66,
              "name": "AFFILIATE",
              "level": "bc",
              "icon": "./assets/images/category-individual.svg"
            },
            {
              "id": 67,
              "name": "FRANCHISEE",
              "level": "bc",
              "icon": "./assets/images/category-individual.svg"
            }
          ]
        }
      ]
    }
  ]


  options: ITreeOptions = {
    idField: 'id',
    displayField: 'name',
    childrenField: 'children'
  };
  

  constructor(
    private sharedService: SharedService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    config: NgbAccordionConfig
  ) {
    // config.closeOthers = false;
    // config.type = 'info';
  }

  ngOnInit() {
    this.initNotesForm();
    this.initBCForm();
    this.sharedService.setExtHeader(true);
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.choiceBoard = params.choiceboard;
    })
    this.newCB = this.sharedService.getNewCB();
    console.log("new Choiceboard ?", this.newCB);
    this.setMasterData();
  }

  // *************------- Tree Expanding Event --******************\\

  // onEvent(event) {
  //   console.log("expanding tree event", event);
  //   this.dropData = event.node.data;
  //   this.slateBreadCrumb.push(this.dropData.name);
  //   if(this.dropData.children[0].level === 'bc'){
  //       this.selectedSMIndex++;
  //       this.addSlotToSlate = true;
  //   }
  //   else{
  //     this.addSlotToSlate = false;
  //   }
  // }

  setMasterData() {
    let master = JSON.parse(JSON.stringify(masterData));
    this.masterData = master.default;
    if (this.choiceBoard === 'Opportunity Patterns') {
      this.masterData = master.default[1].children;
    } else if (this.choiceBoard === 'Value Design') {
      this.masterData = master.default[0].children;
    }
  }

  initNotesForm() {
    this.notesForm = this.fb.group({
      notes: ["", Validators.required],
    });
  }

  initBCForm() {
    this.addBCForm = this.fb.group({
      bcName: [""]
    })
  }

  openAccordian(event) {
    let panelId = event;
    if (!this.panelIdGroup.includes(panelId)) {
      if(this.selectedSMIndex >= 0){
        this.selectedSMIndex++;
        console.log("submodule Index", this.selectedSMIndex);
      }
      this.slates[this.currentSlate].selectedBcs.push({
        SMName: panelId,
        BCList: [],
        Breadcrumb: this.slateBreadCrumb
      });
      // this.panelId = panelId;
      this.panelIdGroup.push(panelId);
      console.log("panel id group", this.panelIdGroup);
    }

    // this.slates[this.currentSlate].selectedBcs.forEach(element => {
    //   if (element.SMName !== panelId) {
    //     this.selectedSMIndex++;
    //     this.slates[this.currentSlate].selectedBcs.push({
    //       SMName: panelId,
    //       BCList: [],
    //       Breadcrumb: this.slateBreadCrumb
    //     });
    //     this.panelId = panelId;
    //   }
    // });
    // if(!this.slates[this.currentSlate].selectedBcs.includes(panelId)){
    //   this.selectedSMIndex++;
    //     this.slates[this.currentSlate].selectedBcs.push({
    //       SMName: panelId,
    //       BCList: [],
    //       Breadcrumb: this.slateBreadCrumb
    //     });
    //     this.panelId = panelId;
    // }
  }



  addTitle(slateTitle) {
    this.openSubModuleModal(this.subModuleModal, 0);
    this.slates.unshift({
      id: null,
      name: slateTitle,
      show: false,
      parentSM: "",
      selectedBcs: [],
      masterBcs: []
    });
  }

  deleteSlate(index) {
    if (index > 0) {
      this.slates.splice(index, 1);
    }
  }

  addNotes() {
    let newNote: any = {};
    newNote.notes = this.notesForm.controls.notes.value;
    if (this.notesForm.valid) {
      this.bcNotes.push(newNote);
    }
  }

  deleteNotes(index) {
    this.bcNotes.splice(index, 1)
  }

  moveUp(old_Ind, new_Ind) {
    if (new_Ind >= this.slates.length) {
      var k = new_Ind - this.slates.length - 1;
      while (k--) {
        this.slates.push({
          id: null,
          slate: "",
          show: false,
          parentSM: "",
          selectedBcs: [
            {
              SMName: "",
              BCList: [],
              Breadcrumb: []
            }
          ],
          masterBcs: this.selectedSM
        });
      }
    }
    this.slates.splice(new_Ind, 0, this.slates.splice(old_Ind, 1)[0]);
  }

  moveDown(old_Ind, new_Ind) {
    if (new_Ind >= this.slates.length) {
      var k = new_Ind - this.slates.length + 1;
      while (k--) {
        this.slates.push({
          id: null,
          slate: "",
          show: false,
          parentSM: "",
          selectedBcs: [
            {
              SMName: "",
              BCList: [],
              Breadcrumb: []
            }
          ],
          masterBcs: this.selectedSM
        });
      }
    }
    this.slates.splice(new_Ind, 0, this.slates.splice(old_Ind, 1)[0]);
  }

  addRow(index) {
    this.compList.push({
      objects: [
        {
          value: "Object 1.1"
        },
        {
          value: "Object 1.2"
        },
        {
          value: "Object 1.3"
        },
        {
          value: "Object 1.4"
        }
      ],
    })
  }

  removeRow(ind) {
    this.compList.splice(ind, 1);
  }

  dropToBC(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      if (!this.slates[this.currentSlate].selectedBcs[this.selectedSMIndex].BCList.length) {
        this.slates[this.currentSlate].selectedBcs.splice(this.selectedSMIndex, 1);
        this.panelIdGroup.splice(this.selectedSMIndex, 1);
        // this.selectedSMIndex--;
        this.addSlotToSlate = true;
      }
    }
    console.log("event on back drag", event);
    console.log("slate after drag back", this.slates);
  }

  dropToSlate(event: CdkDragDrop<any[]>, modelName) {

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    else {
      console.log("event...............", event);
      console.log("submodule Index", this.selectedSMIndex);
      // *************** ------------- This below given code is for Accordian Structure   --------------------**********\\
      if (!event.container.data) {
        event.container.data = [];
      }

      if (this.selectedSMIndex === -1) {
        this.selectedSMIndex = 0;
      }

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      if (this.selectedSMIndex === 0 && !this.slates[this.currentSlate].selectedBcs.length) {
        this.slates[this.currentSlate].selectedBcs.push({
          BCList: event.container.data,
          Breadcrumb: this.slateBreadCrumb,
          SMName: this.selectedSM[0].name
        });
        this.panelIdGroup.push(this.selectedSM[0].name);
      } else {
        if(!this.panelIdGroup.includes(this.selectedSM[this.accordianIndex].name)){
          if (this.addSlotToSlate) {
            // this.selectedSMIndex++;
            console.log("submodule Index", this.selectedSMIndex);
            this.slates[this.currentSlate].selectedBcs.push({
              BCList: [],
              Breadcrumb: this.slateBreadCrumb,
              SMName: this.selectedSM[this.accordianIndex].name
            });
          }
        }
        
        this.addSlotToSlate = false;
        this.slates[this.currentSlate].selectedBcs[this.selectedSMIndex].BCList = event.container.data;
      }
      let infoModal: any;
      if (event.container.data[event.currentIndex].info) {
        infoModal = this.modalService.open(ObjectInfoComponent);
        infoModal.componentInstance.infoData = event.container.data[event.currentIndex];
        infoModal.componentInstance.modalClosed.subscribe(res => {
          if (res) {
            this.modalService.open(modelName);
          }
        })
      }
      else {
        this.modalService.open(modelName);
      }
      console.log("slate after drag", this.slates);

      // *******--------------- This below given commented code is for tree  ----------------------***************\\
      //   if(!event.container.data){
      //     event.container.data = [];
      //   }
      //   transferArrayItem(
      //     event.previousContainer.data,
      //     event.container.data,
      //     event.previousIndex,
      //     event.currentIndex
      //   );
      //   // this.slateBreadCrumb.push(event.container.data[0].name)
      //   console.log("selected Sm Index", this.selectedSMIndex);
      //   if (this.selectedSMIndex === 0) {
      //     console.log("selected Sm Index not wqual wale case me", this.selectedSMIndex);
      //     this.slates[this.currentSlate].selectedBcs.push({
      //       BCList: event.container.data,
      //       Breadcrumb: this.slateBreadCrumb,
      //       SMName: this.dropData.name
      //     });
      //   } else {
      //     console.log("selected Sm Index not wqual -1 wale case me", this.selectedSMIndex);
      //     if(this.addSlotToSlate){
      //       this.slates[this.currentSlate].selectedBcs.push({
      //         BCList: [],
      //         Breadcrumb: this.slateBreadCrumb,
      //         SMName: this.dropData.name
      //       });
      //     }

      //     // if(!this.dropData.children){
      //     //   this.selectedSMIndex++
      //     // }else{
      //     //   this.selectedSMIndex = this.selectedSMIndex;
      //     // }
      //     this.slates[this.currentSlate].selectedBcs[this.selectedSMIndex].BCList = event.container.data;
      //     this.addSlotToSlate = false;
      //   }
      //   // if(this.dropData.children[0].level === 'bc'){
      //   //   this.selectedSMIndex++
      //   // }
      //   // this.selectedSMIndex = event.currentIndex;
      //   console.log("drop event", event);
      //   console.log("slate array after drop", this.slates);
      //   this.modalService.open(modelName);
      //   this.slateBreadCrumb = [];
    }
  }

  changeLayout() {
    if (this.splitIndex < this.splitArray.length - 1) {
      this.splitIndex++;
    } else {
      this.splitIndex = 1;
    }
    this.currentSplit = this.splitArray[this.splitIndex];
  }



  getSubModule(obj, ind) {
    if (obj.info) {
      this.showInfo(obj);
    }
    this.masterData.forEach(element => {
      if (this.slateBreadCrumb.includes(element.name)) {
        this.slateBreadCrumb.pop();
      }
    })
    let masterData = this.masterData;
    if (masterData[ind].children[0].level !== 'bc') {
      this.masterData = masterData[ind].children;
      this.disableContinuebtn = false;
    }
    else {
      this.masterData = masterData;
      this.disableContinuebtn = true;
    }
    this.slateBreadCrumb.push(obj.name);
    console.log("slate breadcrumb", this.slateBreadCrumb);

    this.slates[this.currentSlate].parentSM = obj.name;
    this.selectedSubModule = obj;
  }



  subModuleSelected(subModuleModal) {
    this.modalService.dismissAll(subModuleModal);
    this.slates[this.currentSlate].show = true;
    this.selectedSM.push(this.selectedSubModule);
    this.slates[this.currentSlate].masterBcs = this.selectedSM;
    this.accordianIndex++;
    console.log("submodule Index", this.selectedSMIndex);
    this.openAccordian(this.slates[this.currentSlate].masterBcs[this.accordianIndex].name)
    this.newCB = false;
    
  }

  backTo(item, ind) {
    let master = JSON.parse(JSON.stringify(masterData));
    if (this.choiceBoard !== "Value Design" && this.choiceBoard != "Opportunity Patterns") {
      if (ind === 0) {
        this.masterData = master.default;
        this.slateBreadCrumb = [];
      }
      else {
        let parentInd: number;
        if (this.slateBreadCrumb[0] === "VALUE DESIGN") {
          parentInd = 0;
        }
        else if (this.slateBreadCrumb[0] === "OPPORTUNITY PATTERNS") {
          parentInd = 1;
        }
        this.masterData = master.default[parentInd].children
      }
    }
    else if (this.choiceBoard === 'Value Design') {
      let parentInd = 0;
      this.masterData = master.default[parentInd].children
    }
    this.disableContinuebtn = false;
    this.slateBreadCrumb = this.slateBreadCrumb.filter((each, index) => {
      if (index <= ind) {
        return each;
      }
    })
    console.log("slate breadcrumb yrrr", this.slateBreadCrumb);
    console.log("master data on back", this.masterData);
  }


  // Methods to open all models related to slate and business components

  showInfo(infoData) {
    let infoModal = this.modalService.open(ObjectInfoComponent, {
      // scrollable: true,
      // centered: true,
      // size: 'lg',
      // windowClass: ""
    });
    infoModal.componentInstance.infoData = infoData
  }

  addSlate() {
    let titleModal = this.modalService.open(SlateTitleComponent, {
      // scrollable: true,
      // centered: true,
      // size: 'lg',
      // windowClass: ""
    });

    titleModal.componentInstance.title.subscribe(res => {
      if (res) {
        this.addTitle(res)
      }
    });
  }

  shareSlate() {
    let shareModal = this.modalService.open(ShareComponent, {
      // scrollable: true,
      // centered: true,
      // size: 'lg',
      // windowClass: ""
    });
  }

  openSubModuleModal(subModuleModal, index) {
    this.currentSlate = index;
    this.modalService.open(subModuleModal);
    // this.selectedSM = [];
    // this.slateBreadCrumb = [];
    // this.setMasterData();
  }

  openSlateComments() {
    let commentModal = this.modalService.open(SlateCommentsComponent, {
      // scrollable: true,
      // centered: true,
      // size: 'lg',
      // windowClass: ""
    });
  }

  openSlateNotes() {
    let notesModal = this.modalService.open(SlateNotesComponent, {
      // scrollable: true,
      // centered: true,
      // size: 'lg',
      // windowClass: ""
    });
  }

  // openModal(BCNotesModal, event) {

  // }

  ngOnDestroy() {
    this.sharedService.setExtHeader(false);
  }
}
