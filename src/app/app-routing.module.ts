import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R503industriaComponent } from './components/robotics/r503industria/r503industria.component';
import { R503agroComponent } from './components/robotics/r503agro/r503agro.component';
import { R503Component } from './components/robotics/r503/r503.component';
import { R502Component } from './components/robotics/r502/r502.component';
import { R501Component } from './components/robotics/r501/r501.component';
import { R500Component } from './components/robotics/r500/r500.component';
import { FirstStepsComponent } from './components/first-steps/first-steps.component';
import { KinderbotComponent } from './components/robotics/kinderbot/kinderbot.component';
import { EducationalInstitutionsComponent } from './components/educational-institutions/educational-institutions/educational-institutions.component';
import { TrainingComponent } from './components/training/training/training.component';
import { RoboticsComponent } from './components/robotics/robotics/robotics.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { SupportComponent } from './components/support/support.component';
import { SalvatoreComponent } from './components/salvatore/salvatore.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'educational', component: SalvatoreComponent},
  {path:'support', component: SupportComponent},
  {path:'downloads', component: DownloadsComponent},
  {path:'robotics', component: RoboticsComponent},
  {path:'training', component: TrainingComponent},
  {path:'educational-institutions', component: EducationalInstitutionsComponent},
  {path:'kinderbot', component: KinderbotComponent},
  {path:'first-steps', component: FirstStepsComponent},
  {path:'kinderbot', component: KinderbotComponent},
  {path:'r500', component: R500Component},
  {path:'r501', component: R501Component},
  {path:'r502', component: R502Component},
  {path:'r503', component: R503Component},
  {path:'r503-agro', component: R503agroComponent},
  {path:'r503-industria', component: R503industriaComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  { path: '**', redirectTo: 'home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
