import { Component, OnInit, OnDestroy } from '@angular/core';
import {SharedService} from '../../../shared/services/shared.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, OnDestroy {
  open = false;
  constructor(
    private sharedService : SharedService
  ) { }

  ngOnInit() {
    this.sharedService.setExtHeader(true)
  }

  openQuizList(){
   this.open = true;
  }

  ngOnDestroy(){
    this.sharedService.setExtHeader(false)
  }

}
