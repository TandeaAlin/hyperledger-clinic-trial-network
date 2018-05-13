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

@NgModule({
    imports: [
        AppMaterialModule,
        TrialRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        TrialService,
        ResearchSiteService,
        IdProviderService
    ],
    declarations: [
        TrialComponent,
        TrialFormComponent,
        TrialViewComponent
    ]
})
export class TrialModule { }