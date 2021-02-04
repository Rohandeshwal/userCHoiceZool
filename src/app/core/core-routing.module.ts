import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import {ErrorComponent} from './components/error/error.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
    {path: "settings", component: SettingsComponent  }
  ];
/*  {path:'**',redirectTo:'page-not-found',pathMatch:'full'},
  { path: "page-not-found", component: ErrorComponent },*/  

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CoreRoutingModule { }