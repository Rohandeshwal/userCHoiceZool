import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


// Module
import {SharedModule} from '../shared/shared.module';
// Routing Module
import { CoreRoutingModule} from './core-routing.module';

// Components
import {HeaderComponent} from './components/header/header.component';
import { ErrorComponent } from './components/error/error.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PublishConfirmationComponent } from './components/publish-confirmation/publish-confirmation.component';
import { PublishComponent } from './components/publish/publish.component';


@NgModule({
  declarations: [HeaderComponent, ErrorComponent, NavBarComponent, SettingsComponent, PublishConfirmationComponent, PublishComponent],
  imports: [
    CommonModule,CoreRoutingModule, NgbModule, FontAwesomeModule, SharedModule
  ],
  exports: [HeaderComponent,NavBarComponent, CoreRoutingModule],
  providers: [NgbActiveModal],
  entryComponents: [PublishConfirmationComponent, PublishComponent]
})
export class CoreModule { }
