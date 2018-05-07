import { CRFComponent } from './crf.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../material.module';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { CRFRoutingModule} from './crf.routing'
@NgModule({
    imports: [
        AppMaterialModule,
        CRFRoutingModule,
        CommonModule
    ],
    providers: [
    ],
    declarations: [
        CRFComponent
    ]
})
export class CRFModule { }