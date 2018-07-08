import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../material.module';
import { SponsorRoutingModule } from './sponsor.routing';
import { HistorianService } from '../service/historian.service';
import { SponsorComponent } from './sponsor.component';
import { ComponentModule } from '../components/component.module';
import { TrialService } from '../service/trial.service';
import { HistoryTable } from '../agent/table/history-table.component';

@NgModule({
  imports: [
    CommonModule,
    SponsorRoutingModule,
    AppMaterialModule,
    FormsModule,
    ComponentModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SponsorComponent,
  ],
  providers: [
    HistorianService,
    TrialService
  ]
})
export class SponsorModule { }
