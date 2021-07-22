import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { SupportComponent } from './components/support/support.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { RoboticsComponent } from './components/robotics/robotics/robotics.component';
import { KinderbotComponent } from './components/robotics/kinderbot/kinderbot.component';
import { R500Component } from './components/robotics/r500/r500.component';
import { R501Component } from './components/robotics/r501/r501.component';
import { R502Component } from './components/robotics/r502/r502.component';
import { R503Component } from './components/robotics/r503/r503.component';
import { R503agroComponent } from './components/robotics/r503agro/r503agro.component';
import { R503industriaComponent } from './components/robotics/r503industria/r503industria.component';
import { TrainingComponent } from './components/training/training/training.component';
import { EducationalInstitutionsComponent } from './components/educational-institutions/educational-institutions/educational-institutions.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FirstStepsComponent } from './components/first-steps/first-steps.component';
import { FormsModule } from '@angular/forms';
import { SalvatoreComponent } from './components/salvatore/salvatore.component';
import { ToolbarSalvatoreComponent } from './components/toolbar-salvatore/toolbar-salvatore.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    SupportComponent,
    DownloadsComponent,
    RoboticsComponent,
    KinderbotComponent,
    R500Component,
    R501Component,
    R502Component,
    R503Component,
    R503agroComponent,
    R503industriaComponent,
    TrainingComponent,
    EducationalInstitutionsComponent,
    FirstStepsComponent,
    SalvatoreComponent,
    ToolbarSalvatoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide :  LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
