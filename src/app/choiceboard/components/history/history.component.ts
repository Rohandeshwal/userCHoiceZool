import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
import {SharedService} from '../../../shared/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  providers: [NgbAccordionConfig]
})
export class HistoryComponent implements OnInit, OnDestroy{

  constructor(
    config: NgbAccordionConfig,
    private sharedService: SharedService,
    private router: Router
    ) {
    config.closeOthers = true;
    config.type = 'info';
   }

  ngOnInit() {
    this.sharedService.setExtHeader(true);
  }

  ngOnDestroy(){
    this.sharedService.setExtHeader(false);
  }

  RouteTo(){
    this.router.navigate(['preview']);
  }

}
