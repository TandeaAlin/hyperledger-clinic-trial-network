import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from '../components/component.module';
import { AppMaterialModule } from '../material.module';
import { PatientService } from '../service/patient.service';
import { ResearchSiteService } from '../service/research-site.service';
import { ResearcherService } from '../service/researcher.service';
import { SupplyOrganisationService } from '../service/supply-organisation.service';
import { AdministrationComponent } from './administration.component';
import { AdministrationRoutingModule } from './administration.routing';
import { OrganisationFormComponent } from './organisation/organisation-form.component';
import { PatientFormComponent } from './patient/patient-form.component';
import { ResearcherFormComponent } from './researcher/researcher-from.component';


@NgModule({
  imports: [
    AdministrationRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ComponentModule
  ],
  providers: [
    PatientService,
    ResearchSiteService,
    SupplyOrganisationService,
    ResearcherService
  ],
  declarations: [
    AdministrationComponent,
    PatientFormComponent,
    OrganisationFormComponent,
    ResearcherFormComponent,

  ]
})
export class AdministrationModule { }
