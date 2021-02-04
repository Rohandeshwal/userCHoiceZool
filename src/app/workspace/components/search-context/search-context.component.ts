import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-search-context',
  templateUrl: './search-context.component.html',
  styleUrls: ['./search-context.component.scss']
})
export class SearchContextComponent implements OnInit {
  prodContext: any [] = [
    {
      context: "Product Group*"
    },
    {
      context: "Product Name*"
    },
    {
      context: "Brand*"
    },

  ]

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  search(){
    this.activeModal.close()
  }

}
