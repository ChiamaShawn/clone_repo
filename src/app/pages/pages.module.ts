import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { SubjectComponent } from './subject/subject.component';
import { TopicsComponent } from './topics/topics.component';
import { SubtopicComponent } from './subtopic/subtopic.component';
import { NotesComponent } from './notes/notes.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StatsComponent } from './stats/stats.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
// import { CKFinderModule } from "@ckeditor/ckeditor5-ckfinder"
import { } from '@ckeditor/ckeditor5-build-classic';
import { CreateschoolComponent } from './createschool/createschool.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { CreateteacherComponent } from './createteacher/createteacher.component';
import { LoginComponent } from './login/login.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    CKEditorModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    SubjectComponent,
    TopicsComponent,
    SubtopicComponent,
    NotesComponent,
    StatsComponent,
    CreateschoolComponent,
    CreateStudentComponent,
    TeacherComponent,
    QuizzesComponent,
    CreateQuizComponent,
    CreateteacherComponent,
  ],
})
export class PagesModule {
}
