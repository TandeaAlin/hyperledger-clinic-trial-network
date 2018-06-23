import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: 'app/home/home.module#HomeModule'},
  { path: 'administration', loadChildren:'app/administration/administration.module#AdministrationModule'},
  { path: 'crf', loadChildren:'app/crf/crf.module#CRFModule'},
  { path: 'trial', loadChildren:'app/trial/trial.module#TrialModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
