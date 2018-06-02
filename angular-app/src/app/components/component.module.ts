import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../material.module';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IdProviderService } from '../utils/id-provider.service'
import { PatientTableComponent } from './patient/patient-table.component'
import { RouterModule } from '@angular/router';
import { PatientService } from '../service/patient.service'
import { PatientPageComponent } from '../components/patient-page/patient-page.component'
@NgModule({
    imports: [
        AppMaterialModule,
        CommonModule,
        FormsModule,
        RouterModule
    ],
    providers: [
        IdProviderService,
        PatientService
    ],
    declarations: [
        PatientTableComponent,
        PatientPageComponent
    ],
    exports: [
        PatientTableComponent,
        PatientPageComponent
    ]
})
export class ComponentModule { }