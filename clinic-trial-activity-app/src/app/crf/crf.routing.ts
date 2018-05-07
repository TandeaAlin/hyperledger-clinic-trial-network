import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CRFComponent } from './crf.component'

const routes: Routes = [
  { path: '', component:  CRFComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRFRoutingModule { }
