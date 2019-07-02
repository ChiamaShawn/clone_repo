import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { SubjectComponent } from "./subject/subject.component";
import { TopicsComponent } from './topics/topics.component';
import { SubtopicComponent } from './subtopic/subtopic.component';
import { NotesComponent } from './notes/notes.component';
import { StatsComponent } from './stats/stats.component';
import { CreateschoolComponent } from "./createschool/createschool.component";
import { CreateStudentComponent } from "./create-student/create-student.component";
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: ECommerceComponent,
  },
  {
    path: 'stats',
    component: StatsComponent
  },
  {
    path: 'create-subject',
    component: SubjectComponent
  },
  {
    path: 'create-topics',
    component: TopicsComponent
  },
  {
    path: 'create-subtopic',
    component: SubtopicComponent
  },
  {
    path: 'create-notes',
    component: NotesComponent
  },
  {
    path: 'create-school',
    component: CreateschoolComponent
  },
  {
    path: 'create-student',
    component: CreateStudentComponent
  },
   {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',

  },
   {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
