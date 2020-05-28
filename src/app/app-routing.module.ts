import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { EducationComponent } from './education/education.component';
import { AchievementComponent } from './achievement/achievement.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';

const routes: Routes = [
{ path: 'first' , component: FirstComponent },
{ path: 'personal' ,component: PersonaldetailsComponent },
{ path: 'achievement', component: AchievementComponent },
{ path: 'education', component: EducationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
