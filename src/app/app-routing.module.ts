import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseListComponent} from './courses/course-list/course-list.component';
import {CoursesComponent} from './courses/courses.component';

const routes: Routes = [
  {path: '', component: CoursesComponent},
  {path: 'courses', component: CoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
