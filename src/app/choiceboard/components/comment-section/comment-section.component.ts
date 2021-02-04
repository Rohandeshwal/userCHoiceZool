import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import {SharedService} from './../../../shared/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit, OnDestroy {
 @Output() closeComment = new EventEmitter();
 commentsConfig:any;
  constructor(
    private sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initComments();
    this.sharedService.setExtHeader(true)
  }
  initComments(){
      this.commentsConfig = {
        parenItems:[{
          name:"Rafi",
          img:"./assets/images/rafi.jpg",
          comment :"dasdsadsad"
        }
        
        ]
      }
      
  }
  closeCommentSection(){
    this.closeComment.emit(true);
  }

  RouteTo(){
    this.router.navigate(['preview']);
  }

  ngOnDestroy(){
    this.sharedService.setExtHeader(false)
  }

}
