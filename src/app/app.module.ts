import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { EducationComponent } from './education/education.component';
import { AchievementComponent } from './achievement/achievement.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    EducationComponent,
    AchievementComponent,
    PersonaldetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
