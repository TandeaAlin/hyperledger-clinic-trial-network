import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrialComponent } from './trial.component'
import { TrialFormComponent } from './new-page/trial-form.component';
import { TrialViewComponent } from './overview-page/trial-view.component';

const routes: Routes = [
  { path: '', component: TrialComponent },
  { path: 'new', component: TrialFormComponent },
  { path: 'view/:idTrial', component: TrialViewComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrialRoutingModule { }
