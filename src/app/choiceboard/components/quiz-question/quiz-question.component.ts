import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {
  matchColumns: any[] = [
    {
      prompts: "Prompts 1",
      answers:  [
        {
          value: "Answer 1"
        },
        {
          value: "Answer 2"
        },
        {
          value: "Answer 3"
        }
      ]
    },

    {
      prompts: "Prompts 2",
      answers:  [
        {
          value: "Answer 1"
        },
        {
          value: "Answer 2"
        },
        {
          value: "Answer 3"
        }
      ]
    },

    {
      prompts: "Prompts 3",
      answers:  [
        {
          value: "Answer 1"
        },
        {
          value: "Answer 2"
        },
        {
          value: "Answer 3"
        }
      ]
    }
  ]

  questionList = [
    {
      number: 1,
      question: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy ?",
      // objects: [
      //   {item: "Object 1"},
      //   {item: "Object 2"},
      // ],
      options: [{
        businessComp: [
          {
            name: "Value Proposition"
          },
          {
            name: "Business Modal"
          },
          {
            name: "Opportunity Design"
          },
          {
            name: "Organisation Development"
          },
        ]}
      ]
    },
    {
      number: 2,
      question: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy ?",
      // objects: [
      //   {item: "Object 1"}
      // ],
      options: [{
        businessComp: [
          {
            name: "Value Proposition"
          },
          {
            name: "Business Modal"
          },
          {
            name: "Opportunity Design"
          },
          {
            name: "Organisation Development"
          },
        ]}
      ]
    },
    {
      number: 3,
      question: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy ?",
      // objects: [
      //   {item: "Object 1"},
      //   {item: "Object 2"},        
      //   {item: "Object 3"},
      // ],
      options: [{
        businessComp: [
          {
            name: "Value Proposition"
          },
          {
            name: "Business Modal"
          },
          {
            name: "Opportunity Design"
          },
          {
            name: "Organisation Development"
          },
        ]}
      ]
    },
    {
      number: 4,
      question: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy ?",
      // objects: [
      //   {item: "Object 1"},
      //   {item: "Object 2"},
      // ],
      options: [{
        businessComp: [
          {
            name: "Value Proposition"
          },
          {
            name: "Business Modal"
          },
          {
            name: "Opportunity Design"
          },
          {
            name: "Organisation Development"
          },
        ]}
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  // addRow(index){
  //    this.questionList[index].options.push({
  //     businessComp: [
  //       {
  //         name: "Value Proposition"
  //       },
  //       {
  //         name: "Business Modal"
  //       },
  //       {
  //         name: "Opportunity Design"
  //       },
  //       {
  //         name: "Organisation Development"
  //       },
  //     ]
  //   })
  // }

  // removeRow(index, childIndex){
  //   this.questionList[index].options.splice(childIndex,1);
  // }

}
