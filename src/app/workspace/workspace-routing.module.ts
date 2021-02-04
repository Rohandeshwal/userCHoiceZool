import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



//Component
import {WelcomeWorkspaceComponent} from './components/welcome-workspace/welcome-workspace.component';
import {SetupWorkspaceComponent} from './components/setup-workspace/setup-workspace.component';
import {WorkspaceHomeComponent} from './components/workspace-home/workspace-home.component';

const routes: Routes = [
  {
    path:'',redirectTo:'welcome',pathMatch:'full'
  },
  { path: "welcome", component: WelcomeWorkspaceComponent },
  { path: "create", component: SetupWorkspaceComponent },
  { path: "list", component: WorkspaceHomeComponent },
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class WorkspaceRoutingModule { }