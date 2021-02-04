import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {PublishComponent} from '../publish/publish.component';

@Component({
  selector: 'app-publish-confirmation',
  templateUrl: './publish-confirmation.component.html',
  styleUrls: ['./publish-confirmation.component.scss']
})
export class PublishConfirmationComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  onPublish(){
    this.activeModal.close();
    let publishModal = this.modalService.open(PublishComponent, {
      scrollable: true
    });
  }

  closeModal(){
    this.activeModal.close();
  }

}
