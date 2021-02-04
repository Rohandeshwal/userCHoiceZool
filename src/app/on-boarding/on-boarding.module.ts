import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// Module Import
import {SharedModule} from './../shared/shared.module';
import {ChoiceboardModule} from './../choiceboard/choiceboard.module';
import {CoreModule} from './../core/core.module';

// Routing Module
import { OnBoardingRoutingModule} from './on-boarding-routing.module';

// pages
import { UserInfoComponent } from '../on-boarding/pages/user-info/user-info.component';

// Components
import {ConfigCategoryComponent} from '../on-boarding/components/config-category/config-category.component';
import {PersonalConfigComponent} from '../on-boarding/components/personal-config/personal-config.component';
import {SocialMediaConfigComponent} from '../on-boarding/components/social-media-config/social-media-config.component';
import {Welcome2choiceboardComponent} from '../on-boarding/components/welcome2choiceboard/welcome2choiceboard.component';



@NgModule({
  declarations: [UserInfoComponent, ConfigCategoryComponent, PersonalConfigComponent, SocialMediaConfigComponent,Welcome2choiceboardComponent ],
  imports: [
    CommonModule, FormsModule, NgbModule, CoreModule, ChoiceboardModule, SharedModule, OnBoardingRoutingModule
  ]
})
export class OnBoardingModule { }
