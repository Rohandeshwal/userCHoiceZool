import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeModule } from 'angular-tree-component';


import {NgxPaginationModule} from 'ngx-pagination'; 

// Modules
import {SharedModule} from '../shared/shared.module';
import {CoreModule} from '../core/core.module';

// Routing Module
import {ChoiceboardRoutingModule} from './choiceboard-routing.module';

// Components
import { CreateChoiceboardComponent } from './components/create-choiceboard/create-choiceboard.component';
import { SubModuleSelectionComponent } from './components/sub-module-selection/sub-module-selection.component';
import { ChoiceboardPreviewComponent } from './pages/choiceboard-preview/choiceboard-preview.component';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';
import { HistoryComponent } from './components/history/history.component';
import { CbDashboardComponent } from './components/cb-dashboard/cb-dashboard.component';
import {CaseStudyListComponent} from './components/case-study-list/case-study-list.component';
import { CaseStudyInfoComponent } from './components/case-study-info/case-study-info.component';
import { CaseStudychallengeComponent } from './components/case-study-challenge/case-study-challenge.component';
import { CaseStudiesComponent } from './pages/case-studies/case-studies.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { QuizQuestionComponent } from './components/quiz-question/quiz-question.component';
import { QuizComponent } from './pages/quiz/quiz.component';

// Modal Components
import { SlateTitleComponent } from './components/slate-title/slate-title.component';
import { ObjectInfoComponent } from './components/object-info/object-info.component';
import { SlateCommentsComponent } from './components/slate-comments/slate-comments.component';
import { SlateNotesComponent } from './components/slate-notes/slate-notes.component';

@NgModule({
  declarations: [CreateChoiceboardComponent, SubModuleSelectionComponent, ChoiceboardPreviewComponent, CommentSectionComponent, HistoryComponent, CbDashboardComponent, CaseStudyListComponent, CaseStudyInfoComponent, CaseStudychallengeComponent, CaseStudiesComponent, QuizListComponent, QuizQuestionComponent, QuizComponent, SlateTitleComponent, ObjectInfoComponent, SlateCommentsComponent, SlateNotesComponent],
  imports: [
    CommonModule,
    ChoiceboardRoutingModule, 
    CoreModule, 
    SharedModule, 
    NgbModule, 
    DragDropModule,
    FormsModule, 
    ReactiveFormsModule, 
    NgxPaginationModule,
    TreeModule.forRoot()
  ],
  entryComponents: [SlateTitleComponent, ObjectInfoComponent, SlateCommentsComponent, SlateNotesComponent]
})
export class ChoiceboardModule { }
