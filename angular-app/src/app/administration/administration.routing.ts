import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { AgentFormComponent } from './agent/agent-form.component';
import { OrganisationFormComponent } from './organisation/organisation-form.component';
import { PatientFormComponent } from './patient/patient-form.component';
import { ResearcherFormComponent } from './researcher/researcher-from.component';
const routes: Routes = [
  { path: '', component: AdministrationComponent },
  { path: 'new', component: PatientFormComponent },
  { path: 'new/:idPatient', component: PatientFormComponent },
  { path: 'neworg', component: OrganisationFormComponent },
  { path: 'neworg/:idOrg', component: OrganisationFormComponent },
  { path: 'newres', component: ResearcherFormComponent },
  { path: 'newres/:idResearcher', component: ResearcherFormComponent },
  { path: 'newagent/:idAgent', component: AgentFormComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
