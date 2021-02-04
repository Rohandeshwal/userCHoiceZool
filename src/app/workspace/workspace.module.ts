import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Module Import
import {SharedModule} from './../shared/shared.module';
import {ChoiceboardModule} from './../choiceboard/choiceboard.module';
import {CoreModule} from './../core/core.module';

// Routing Module
import { WorkspaceRoutingModule} from './workspace-routing.module';

// components
import { WelcomeWorkspaceComponent } from '../workspace/components/welcome-workspace/welcome-workspace.component';
import { SetupWorkspaceComponent } from '../workspace/components/setup-workspace/setup-workspace.component';
import { WorkspaceHomeComponent } from './components/workspace-home/workspace-home.component';
import { SearchContextComponent } from './components/search-context/search-context.component';


@NgModule({
  declarations: [WelcomeWorkspaceComponent, SetupWorkspaceComponent, WorkspaceHomeComponent, SearchContextComponent],
  imports: [
CommonModule,WorkspaceRoutingModule, SharedModule, ChoiceboardModule,CoreModule, FormsModule, NgbModule, NgxPaginationModule
  ],
  entryComponents: [SearchContextComponent]
})
export class WorkspaceModule { }
