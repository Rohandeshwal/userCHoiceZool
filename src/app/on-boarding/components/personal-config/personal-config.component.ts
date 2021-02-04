import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-personal-config',
  templateUrl: './personal-config.component.html',
  styleUrls: ['./personal-config.component.scss']
})
export class PersonalConfigComponent implements OnInit {
  constructor(
    public router: Router,
  ) { }

  @Input() userCategory:any;

  ngOnInit() {
  }

  ngOnChanges(){

  }
  
}
