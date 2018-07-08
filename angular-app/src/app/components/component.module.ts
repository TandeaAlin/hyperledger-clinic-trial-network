import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PatientPageComponent } from '../components/patient-page/patient-page.component';
import { AppMaterialModule } from '../material.module';
import { PatientService } from '../service/patient.service';
import { IdProviderService } from '../utils/id-provider.service';
import { FormComponent } from './form/form.component';
import { CustomFormSelectDialog, PatientTableComponent } from './patient/patient-table.component';
import { RecordsComponent } from './records/records.component';
import { ResourceProvider } from '../utils/resource-provider';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { ResearcherTableComponent } from './researcher-table/researcher-table.component';
import { FormValueService } from '../service/FormValue.service';
import { HistoryTable } from '../agent/table/history-table.component';

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
        PatientService,
        ResourceProvider,
        FormValueService
    ],
    declarations: [
        PatientTableComponent,
        PatientPageComponent,
        FormComponent,
        CustomFormSelectDialog,
        UserManagerComponent,
        ResearcherTableComponent,
        RecordsComponent,
        HistoryTable
    ],
    entryComponents:[
        PatientTableComponent,
        CustomFormSelectDialog
    ],
    exports: [
        PatientTableComponent,
        PatientPageComponent,
        UserManagerComponent,
        FormComponent,
        ResearcherTableComponent,
        CustomFormSelectDialog,
        RecordsComponent,
        HistoryTable
    ]
})
export class ComponentModule { }