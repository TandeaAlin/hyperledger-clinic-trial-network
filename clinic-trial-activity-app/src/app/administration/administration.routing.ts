import { AdministrationComponent } from './administration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientFormComponent } from './patient/patient-form.component'
import { OrganisationFormComponent } from './organisation/organisation-form.component';


const routes: Routes = [
  { path: '', component: AdministrationComponent },
  { path: 'new', component: PatientFormComponent},
  { path: 'new/:idPatient', component: PatientFormComponent},
  { path: 'neworg', component: OrganisationFormComponent},
  { path: 'neworg/:idOrg', component: OrganisationFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
