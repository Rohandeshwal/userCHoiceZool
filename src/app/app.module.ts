import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// Services

//Component Imports
import { AppComponent } from './app.component';

//Module Imports
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {ChoiceboardModule} from './choiceboard/choiceboard.module';
import {WorkspaceModule} from './workspace/workspace.module';
import {OnBoardingModule} from './on-boarding/on-boarding.module';
import { SharedService} from './shared/services/shared.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AuthModule,
    CoreModule,
    SharedModule, 
    ChoiceboardModule, 
    WorkspaceModule, 
    OnBoardingModule,
    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
