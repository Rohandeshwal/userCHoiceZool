import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-welcome2choiceboard',
  templateUrl: './welcome2choiceboard.component.html',
  styleUrls: ['./welcome2choiceboard.component.scss']
})
export class Welcome2choiceboardComponent implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/workspace/welcome'])
    }, 3000);
  }

}
