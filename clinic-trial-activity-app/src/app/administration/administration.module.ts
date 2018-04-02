import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration.routing';
import { AdministrationComponent } from './administration.component';
import { AppMaterialModule } from '../material.module';
import { PatientService } from '../service/patient.service'

@NgModule({
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    AppMaterialModule
  ],
  providers: [
    PatientService
  ],
  declarations: [AdministrationComponent]
})
export class AdministrationModule { }
