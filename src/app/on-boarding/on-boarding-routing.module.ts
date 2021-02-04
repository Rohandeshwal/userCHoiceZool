import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// pages
import { UserInfoComponent } from '../on-boarding/pages/user-info/user-info.component';

// Components
import {Welcome2choiceboardComponent} from '../on-boarding/components/welcome2choiceboard/welcome2choiceboard.component';
const routes: Routes = [
  {
    path:'',redirectTo:'user-info',pathMatch:'full'
  },
  { path: "welcome", component: Welcome2choiceboardComponent },
  { path: "user-info", component: UserInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnBoardingRoutingModule { }
