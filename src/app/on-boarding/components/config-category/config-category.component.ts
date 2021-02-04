import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
import { APPConfig } from 'src/app/configurations/app.config';

@Component({
  selector: 'app-config-category',
  templateUrl: './config-category.component.html',
  styleUrls: ['./config-category.component.scss']
})
export class ConfigCategoryComponent implements OnInit {
  appConfig = APPConfig;
  @Output() studentCat = new EventEmitter();
  @Output() userCategory = new EventEmitter();
  categoryForm: FormGroup;

  categories = [
    {
      categoryIcon: "C. User Type/Collaborator.svg",
      categoryName: "Collaborator/Consultant",
      value: "collaborator"
    },
    {
      categoryIcon: "C. User Type/Enterprise.svg",
      categoryName: "Company",
      value: "company"
    },
    {
      categoryIcon: "C. User Type/Student.svg",
      categoryName: "Student",
      value: "student"
    },
    {
      categoryIcon: "C. User Type/Institution.svg",
      categoryName: "Business School/University",
      value: "university"
    },
    {
      categoryIcon: "C. User Type/Individual.svg",
      categoryName: "Working Professional",
      value: "working professional"
    },
    // {
    //    categoryIcon: "C. User Type/Business.svg",
    //    categoryName: "Small & Medium Business",
    //    value: "business"
    // },


    // {
    //    categoryIcon: "C. User Type/Student.svg",
    //    categoryName: "Consultant",
    //    value: "individual"
    // },

  ];

  

  constructor(
    public router: Router,
    public fb: FormBuilder
  ) { }
  
  ngOnInit() {
    this.categoryForm = this.fb.group({
      
    })
  }
  

  checkValue(value){
    this.userCategory.emit(value);
  }
}
