import { TrialComponent } from './trial.component';
import { TrialViewComponent } from './overview-page/trial-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../material.module';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { TrialRoutingModule } from './trial.routing';
import { TrialService } from '../service/trial.service';
import { ResearchSiteService } from '../service/research-site.service';
import { TrialFormComponent } from '../trial/new-page/trial-form.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IdProviderService } from '../utils/id-provider.service';
import { CRFModule } from '../crf/crf.module'
import { PatientQueryService } from '../service/queries/patient-query-service'
import { ComponentModule } from '../components/component.module'
@NgModule({
    imports: [
        AppMaterialModule,
        TrialRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CRFModule,
        ComponentModule
    ],
    providers: [
        TrialService,
        ResearchSiteService,
        IdProviderService,
        PatientQueryService
    ],
    declarations: [
        TrialComponent,
        TrialFormComponent,
        TrialViewComponent,
    ]
})
export class TrialModule { }