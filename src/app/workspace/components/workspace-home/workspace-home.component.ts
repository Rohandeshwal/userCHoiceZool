import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SharedService } from '../../../shared/services/shared.service';
import {SearchContextComponent} from "../search-context/search-context.component";
import {ShareComponent} from "../../../shared/components/share/share.component";

@Component({
  selector: 'app-workspace-home',
  templateUrl: './workspace-home.component.html',
  styleUrls: ['./workspace-home.component.scss']
})
export class WorkspaceHomeComponent implements OnInit {
  public showMenuBar: boolean = false;
  workspaceIndex: null;
  highlighterID1: any;
  highlighterID2: any;
  highlighterID3: any;
  highlighterID4: any;
  p1: number = 1;
  p2: number = 1;
  p3: number = 1;
  p4: number = 1;
  p5: number = 1;
  p6: number = 1;

  workspaces = [
    {
      name: "Parle Exotics"
    },
    {
      name: "Tik Tok 2020"
    },
    {
      name: "MRF Tyres"
    },
  ];



  constructor(
    public router: Router,
    private modelService: NgbModal,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
  }

  routeTo(action, name) {
    switch (action) {
      case "choiceboard":
        this.router.navigate(['choiceboard'], { queryParams: { workspace: name } });
        break;

      case "setup":
        this.router.navigate(['/workspace/create']);
        break;
    }
  }

  searchWorkSpace(){
    let searchModal = this.modelService.open(SearchContextComponent, {
      scrollable: true
    });
  }

  openDeleteModal(deleteModal) {
    this.modelService.open(deleteModal);
  }
  openModal() {
    let searchModal = this.modelService.open(ShareComponent, {
      scrollable: true
    });
  }

  highlight(action) {
    switch (action) {
      case "my-WS":
        this.highlighterID1 = true;
        document.getElementById('my-WS').scrollIntoView();
        setTimeout(() => {
          this.highlighterID1 = false;
        }, 1000);
        break;

      case "sharedByMe":
        this.highlighterID2 = true;
        document.getElementById('sharedByMe').scrollIntoView();
        setTimeout(() => {
          this.highlighterID2 = false;
        }, 1000);
        break;

      case "sharedWS":
        this.highlighterID3 = true;
        document.getElementById('sharedWS').scrollIntoView();
        setTimeout(() => {
          this.highlighterID3 = false;
        }, 1000);
        break;

      case "Case-Quiz":
        this.highlighterID4 = true;
        document.getElementById('Case-Quiz').scrollIntoView();
        setTimeout(() => {
          this.highlighterID4 = false;
        }, 1000);
        break;
    }
  }
}

