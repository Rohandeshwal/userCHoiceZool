import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-social-media-config',
  templateUrl: './social-media-config.component.html',
  styleUrls: ['./social-media-config.component.scss']
})
export class SocialMediaConfigComponent implements OnInit {
 @Input() userCategory: any;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){

  }

}
