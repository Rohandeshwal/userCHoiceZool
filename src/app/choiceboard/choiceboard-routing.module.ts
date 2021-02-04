import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { CbDashboardComponent } from "./components/cb-dashboard/cb-dashboard.component";
import { CreateChoiceboardComponent } from "./components/create-choiceboard/create-choiceboard.component";
import { ChoiceboardPreviewComponent } from "./pages/choiceboard-preview/choiceboard-preview.component";
import { HistoryComponent } from "../choiceboard/components/history/history.component";
import { CaseStudiesComponent } from "../choiceboard/pages/case-studies/case-studies.component";
import { QuizComponent } from "../choiceboard/pages/quiz/quiz.component";
import { CommentSectionComponent } from './components/comment-section/comment-section.component';


// Pages
const routes: Routes = [
  { path: "", redirectTo: "cb-list", pathMatch: "full" },
  { path: "cb-list", component: CbDashboardComponent },
  { path: "create", component: CreateChoiceboardComponent },
  { path: "preview", component: ChoiceboardPreviewComponent },
  { path: "preview/:newCB", component: ChoiceboardPreviewComponent },
  { path: "history", component: HistoryComponent },
  { path: "case-studies", component: CaseStudiesComponent },
  { path: "quiz", component: QuizComponent },
  {path:"comments",component:CommentSectionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChoiceboardRoutingModule {}
