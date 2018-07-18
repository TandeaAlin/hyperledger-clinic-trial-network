import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../material.module';
import { IdProviderService } from '../utils/id-provider.service';
import { CRFComponent } from './crf.component';
import { CRFRoutingModule } from './crf.routing';
@NgModule({
    imports: [
        AppMaterialModule,
        CRFRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        IdProviderService,
    ],
    declarations: [
        CRFComponent
    ],
    exports: [
        CRFComponent
    ]
})
export class CRFModule { }