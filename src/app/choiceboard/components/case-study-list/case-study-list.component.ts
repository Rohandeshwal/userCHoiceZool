import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-case-study-list',
  templateUrl: './case-study-list.component.html',
  styleUrls: ['./case-study-list.component.scss']
})
export class CaseStudyListComponent implements OnInit {
  p: number = 1;
 @Output() hideCaseList = new EventEmitter();
  caseList = [
    {
      name: "Case Study 1",
      module: "Module A",
      association: "ChoiceBoard"
    },
    {
      name: "Case Study 2",
      module: "Module A",
      association: "ChoiceBoard"
    },
        {
          name: "Case Study 3",
          module: "Module A",
          association: "ChoiceBoard"
        },
    {
      name: "Case Study 4",
      module: "SubModule 1",
      association: "Slate 1"
    },
    {
      name: "Case Study 5",
      module: "SubModule 1",
      association: "Slate 1"
    },
    {
      name: "Case Study 6",
      module: "SubModule 2",
      association: "Slate 2"
    },
    {
      name: "Case Study 7",
      module: "SubModule 3",
      association: "Slate 3"
    },
    {
      name: "Case Study 8",
      module: "SubModule 3",
      association: "Slate 3"
    },
    {
      name: "Case Study 9",
      module: "SubModule 4",
      association: "Slate 4"
    },
    {
      name: "Case Study 10",
      module: "SubModule 5",
      association: "Slate 5"
    },
    {
      name: "Case Study 11",
      module: "SubModule 6",
      association: "Slate 6"
    } 
  ]

  constructor() { }

  ngOnInit() {
  }

  openCaseStudy(){
    this.hideCaseList.emit(true);
  }

}
