import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdministrationRoutingModule } from './administration.routing';
import { AdministrationComponent } from './administration.component';
import { AppMaterialModule } from '../material.module';
import { PatientService } from '../service/patient.service'
import { ResearchSiteService } from '../service/research-site.service';
import { SupplyOrganisationService } from '../service/supply-organisation.service';
import { PatientFormComponent } from './patient/patient-form.component';

@NgModule({
  imports: [
    AdministrationRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [
    PatientService,
    ResearchSiteService,
    SupplyOrganisationService
  ],
  declarations: [
    AdministrationComponent,
    PatientFormComponent
  ]
})
export class AdministrationModule { }