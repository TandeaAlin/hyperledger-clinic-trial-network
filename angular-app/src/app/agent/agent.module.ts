import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from '../components/component.module';
import { LoaderService } from '../components/loader/loader.service';
import { AppMaterialModule } from '../material.module';
import { HistorianService } from '../service/historian.service';
import { TrialService } from '../service/trial.service';
import { AgentComponent } from './agent.component';
import { AgentRoutingModule } from './agent.routing';

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
  ],
  providers: [
    HistorianService
  ]
})
export class AgentModule { }
