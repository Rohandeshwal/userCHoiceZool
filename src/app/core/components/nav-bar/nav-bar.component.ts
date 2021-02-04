import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {PublishConfirmationComponent} from '../publish-confirmation/publish-confirmation.component';


// Service
import { SharedService } from "../../../shared/services/shared.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit {
  public isCollapsed = true;
  shareModalState: boolean;
  commentState: boolean;

  navbarItems: any[] = [
    {
      navIcon: "fa fa-clone",
      navText: "Clone"
    },
    {
      navIcon: "fa fa-comment-o",
      navText: "Comments"
    },
    {
      navIcon: "fa fa-history",
      navText: "View Progress"
    },
    {
      navIcon: "fa fa-eye",
      navText: "Preview"
    },
    {
      navIcon: "fa fa-external-link",
      navText: "Publish"
    }
  ];

  constructor(
    public router: Router, 
    private sharedService: SharedService,
    private modalService: NgbModal,
    private activeModal: NgbActiveModal
    ) {}

  ngOnInit() {}

  click1() {
    this.isCollapsed = false;
  }

  click2() {
    this.isCollapsed = true;
  }

  openModal(navItem, index, modalName) {
    console.log("index------------",index);
    
    switch (index) {
      case 0:
        this.router.navigate(["/choiceboard/preview"]);
        break;
      case 1:
        this.router.navigate(["/choiceboard/comments"]);
        break;

      case 2:
        this.router.navigate(["/choiceboard/history"]);
        break;
        
      // case 4:
      //   this.sharedService.openShareModal(true);
      //   break;

      case 4:
        let searchModal = this.modalService.open(PublishConfirmationComponent, {
          scrollable: true
        });
        break;

      // case 6:
      //   this.router.navigate(["case-studies"])
      //   break;

      // case 7:
      //   this.router.navigate(["quiz"]);
      //   break;
       
    }
  }
}
