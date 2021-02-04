import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

import { SharedService } from '.././../../../app/shared/services/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NgbDropdownConfig]
})
export class HeaderComponent implements OnInit {
  headerState: any;
  constructor(
    config: NgbDropdownConfig,
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) {
    config.placement = 'bottom-right';
    config.autoClose = true;
  }

  ngOnInit() {
     this.sharedService.getExtHeader.subscribe(res => {
      this.headerState = res 
      });
  }
}
