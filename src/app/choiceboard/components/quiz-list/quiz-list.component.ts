import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {
  p: number = 1;
  @Output() hideQuizList = new EventEmitter();
  quizList = [
    {
      name: "Quiz 1"
    },
    {
      name: "Quiz 2"
    },
    {
      name: "Quiz 3"
    },
    {
      name: "Quiz 4"
    },
    {
      name: "Quiz 5"
    },
    {
      name: "Quiz 6"
    },
    {
      name: "Quiz 7"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  openQuizList(){
    this.hideQuizList.emit(true);
  }

}
