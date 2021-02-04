import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import { APPConfig } from 'src/app/configurations/app.config';

@Component({
  selector: 'app-object-info',
  templateUrl: './object-info.component.html',
  styleUrls: ['./object-info.component.scss']
})
export class ObjectInfoComponent implements OnInit, OnChanges {
  appConfig = APPConfig;
  @Input() infoData: any;
  @Output() modalClosed = new EventEmitter<boolean>();
  constructor(
   private sharedService: SharedService,
   private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  ngOnChanges(){
  console.log("infoDataaaa", this.infoData);
  }

  closeModal(){
    this.activeModal.close();
    this.modalClosed.emit(true);
  }

}
