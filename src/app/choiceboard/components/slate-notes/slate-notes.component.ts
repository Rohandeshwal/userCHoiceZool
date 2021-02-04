import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slate-notes',
  templateUrl: './slate-notes.component.html',
  styleUrls: ['./slate-notes.component.scss']
})
export class SlateNotesComponent implements OnInit {

  constructor(
    private activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {
  }

  closeModal(){
    this.activeModal.close();
  }


}
