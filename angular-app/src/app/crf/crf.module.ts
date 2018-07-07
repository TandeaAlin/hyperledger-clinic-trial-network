import { CRFComponent } from './crf.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../material.module';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { CRFRoutingModule } from './crf.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IdProviderService } from '../utils/id-provider.service'
@NgModule({
    imports: [
        AppMaterialModule,
        CRFRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        IdProviderService
    ],
    declarations: [
        CRFComponent
    ],
    exports: [
        CRFComponent
    ]
})
export class CRFModule { }