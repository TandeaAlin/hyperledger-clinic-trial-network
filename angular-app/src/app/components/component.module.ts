import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../material.module';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IdProviderService } from '../utils/id-provider.service'
import { PatientTableComponent, CustomFormSelectDialog } from './patient/patient-table.component'
import { RouterModule } from '@angular/router';
import { PatientService } from '../service/patient.service'
import { PatientPageComponent } from '../components/patient-page/patient-page.component'
import { FormComponent } from './form/form.component';
@NgModule({
    imports: [
        AppMaterialModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    providers: [
        IdProviderService,
        PatientService
    ],
    declarations: [
        PatientTableComponent,
        PatientPageComponent,
        FormComponent,
        CustomFormSelectDialog
    ],
    entryComponents:[
        PatientTableComponent,
        CustomFormSelectDialog
    ],
    exports: [
        PatientTableComponent,
        PatientPageComponent,
        FormComponent,
        CustomFormSelectDialog
    ]
})
export class ComponentModule { }