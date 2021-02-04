import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {SharedService} from '../../../shared/services/shared.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import {PublishConfirmationComponent} from '../../../core/components/publish-confirmation/publish-confirmation.component';
import {ShareComponent} from "../../../shared/components/share/share.component";
import {APPConfig } from 'src/app/configurations/app.config';

@Component({
  selector: 'app-cb-dashboard',
  templateUrl: './cb-dashboard.component.html',
  styleUrls: ['./cb-dashboard.component.scss']
})
export class CbDashboardComponent implements OnInit {
  APPConfig = APPConfig;
  public showMenuBar: boolean = false;
  p1: number = 1;
  p2: number = 1;
  p3: number = 1;
  p4: number = 1;
  p5: number = 1;
  p6: number = 1;
  workSpaceName: any;
  workspaceIndex: null;
   highlighterID1: any;
   highlighterID2: any;
   highlighterID3: any;
   highlighterID4: any;
   highlighterID5: any;

  choiceBoards  =  [
    {
      name: "Value Design 2020",
      shared_count: "3"
    },
    {
       name: "Value Design 2019",
       shared_count: "2"
    },
    {
      name: "Value Design 2018",
      shared_count: "5"
   },

   {
    name: "Value Design 2020",
    shared_count: "3"
  },
  {
     name: "Value Design 2019",
     shared_count: "2"
  },
  {  
    name: "Value Design 2018",
    shared_count: "5"
 },
  ];

  sharedChoiceBoards  =  [
    {
      name: "Value Design 2020",
      shared_count: "3"
    },
    {
       name: "Value Design 2019",
       shared_count: "2"
    },
    {
      name: "Value Design 2018",
      shared_count: "5"
   },

   {
    name: "Value Design 2020",
    shared_count: "3"
  },
  {
     name: "Value Design 2019",
     shared_count: "2"
  },
  {
    name: "Value Design 2018",
    shared_count: "5"
 },
  ];
  
  

  constructor(
    public router: Router,
    private sharedService: SharedService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    // this.workSpaceName = this.sharedService.getWSName();
    // console.log(this.sharedService.getWSName());
   this.route.queryParams.subscribe(params => {
    this.workSpaceName = params.workspace 
   })
  }


  openChoiceboardDeleteModal(content){
    this.modalService.open(content)
  }

  publishChoiceBoard(){
    let publishModal = this.modalService.open(PublishConfirmationComponent, {
      scrollable: true
    });
  }

  shareChoiceBoard(){
    let shareModal = this.modalService.open(ShareComponent, {
      scrollable: true
    });
  }

  routeTo(action, name){

    switch (action) {
      case "preview":
        this.router.navigate(['/choiceboard/preview'], {queryParams: {choiceboard: name}});
        break;

        case "create":
          this.router.navigate(['/choiceboard/create']);
          break;  

          case "workspace":
            this.router.navigate(['/workspace/list']);
           break;

        case "case-study":
          this.router.navigate(["case-studies"]);
        break;

        case "quiz":
          this.router.navigate(["quiz"]);
        break;
    }
  }

  highlight(action) {
    switch (action) {
      case "myCBs":
        this.highlighterID1 = true;
      document.getElementById('myCBs').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      setTimeout(() => {
        this.highlighterID1 = false;
      }, 1000);
        break;

      case "sharedByMe":
        this.highlighterID2 = true;
        document.getElementById('sharedByMe').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        setTimeout(() => {
          this.highlighterID2 = false;
        }, 1000);
        break;

      case "sharedCBs":
        this.highlighterID3 = true;
      document.getElementById('sharedCBs').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      setTimeout(() => {
        this.highlighterID3 = false;
      }, 1000);

      case "Case-Quiz":
        this.highlighterID4 = true;
        document.getElementById('Case-Quiz').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        setTimeout(() => {
          this.highlighterID4 = false;
        }, 1000);
        break;

        case "recommended":
        this.highlighterID5 = true;
        document.getElementById('recommended').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        setTimeout(() => {
          this.highlighterID5 = false;
        }, 1000);
        break;
    }
  }

}
