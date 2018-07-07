import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../material.module';
import { AgentRoutingModule } from './agent.routing';
import { HistorianService } from '../service/historian.service';
import { AgentComponent } from './agent.component';
import { HistoryTable } from './table/history-table.component';
import { ComponentModule } from '../components/component.module';
import { TrialService } from '../service/trial.service';

@NgModule({
  imports: [
    CommonModule,
    AgentRoutingModule,
    AppMaterialModule,
    FormsModule,
    ComponentModule,
    ReactiveFormsModule
  ],
  declarations: [
    AgentComponent,
    HistoryTable
  ],
  exports:[
    HistoryTable
  ],
  providers: [
    HistorianService,
    TrialService
  ]
})
export class AgentModule { }
