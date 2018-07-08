import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../material.module';
import { ResearcherService } from '../service/researcher.service';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { LoginComponent } from './login.component';
import { PatientViewComponent } from './patient-view/patient-view.component'
import { PatientService } from '../service/patient.service';
import { SupplierService } from '../service/Supplier.service';
import { AgentService } from '../service/Agent.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppMaterialModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    LoginComponent,
    PatientViewComponent
  ],
  providers: [
    ResearcherService,
    PatientService,
    SupplierService,
    AgentService
  ]
})
export class HomeModule { }
