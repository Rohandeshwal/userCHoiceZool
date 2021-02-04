import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slate-comments',
  templateUrl: './slate-comments.component.html',
  styleUrls: ['./slate-comments.component.scss']
})
export class SlateCommentsComponent implements OnInit {
  commentconfig: any;

  constructor(
    private activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {
    this.initComment();
  }

  initComment() {
    this.commentconfig = {
      parentItems: [{
        name: "Rafi",
        img: "./assets/images/rafi.jpg",
        comment: "Where slate is used?"

      },
      {
        name: "Rohan",
        img: "./assets/images/rohan.jpg",
        comment: "where we add tik-tok slate?"

      },
      {
        name: "Jordan",
        img: "./assets/images/jordan.jpg",
        comment: "Cool"
      }
      ]
    }
  }

  closeModal(){
    this.activeModal.close();
  }

}
