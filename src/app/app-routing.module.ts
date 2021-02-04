import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ErrorComponent } from './core/components/error/error.component';

  const routes: Routes = [
    {path:'',redirectTo:'auth',pathMatch:'full'},
    {path:'auth', loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)},
    {path:'on-board', loadChildren:() => import('./on-boarding/on-boarding.module').then(m => m.OnBoardingModule)},
    {path:'workspace', loadChildren:() => import('./workspace/workspace.module').then(m => m.WorkspaceModule)},
    {path:'core', loadChildren:() => import('./core/core.module').then(m => m.CoreModule)},
    {path:'choiceboard', loadChildren:() => import('./choiceboard/choiceboard.module').then(m => m.ChoiceboardModule)}
];
/* {path:'**',redirectTo:'page-not-found',pathMatch:'full'},
    { path: "page-not-found", component: ErrorComponent }*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
