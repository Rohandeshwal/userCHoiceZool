import { Component, OnInit, OnDestroy } from '@angular/core';
import {SharedService} from '../../../shared/services/shared.service';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent implements OnInit, OnDestroy {
open = false;
  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit() {
     this.sharedService.setExtHeader(true)
  }

  openCaseStudy(){
  this.open = true;
  }

  ngOnDestroy(){
    this.sharedService.setExtHeader(false)
  }

}
