import { Component, OnInit, Output,  EventEmitter} from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-slate-title',
  templateUrl: './slate-title.component.html',
  styleUrls: ['./slate-title.component.scss']
})
export class SlateTitleComponent implements OnInit {
  slateTitle: any;
  slateDesc: any;
  @Output() title = new EventEmitter<string>();

  constructor(
    private activeModal: NgbActiveModal,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
  }

  addTitle(){
   if(this.slateTitle){
     this.title.emit(this.slateTitle);
    this.activeModal.close();
   }
  }

  closeModal(){
   this.activeModal.close();
  }

}
