import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import {NgbCarouselConfig,NgbCarousel, NgbSlideEvent, NgbSlideEventSource,} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  providers: [NgbCarouselConfig]
})
export class UserInfoComponent implements OnInit {
  slideIndex: any;
  userCategory:string;
  @ViewChild('carousel', {static: true}) carousel: NgbCarousel; 

  constructor(
    public router: Router,
    config: NgbCarouselConfig
  ) { 
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
    config.interval = null;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
  }
  routeToPrev(){
    this.carousel.prev();
  }
  routeToNext(slideID){
    this.slideIndex = slideID
    console.log(this.slideIndex)
    this.carousel.next();
    if(this.slideIndex === "slideThree"){
      this.router.navigate(['/on-board/welcome']);
    }
  }

  checkUserCategory(userCategory){
    console.log('userCategory-->',userCategory);
    this.userCategory = userCategory;
  }
}
