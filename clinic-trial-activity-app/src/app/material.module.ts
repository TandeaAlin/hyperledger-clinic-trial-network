import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
   MatToolbarModule,
   MatTabsModule,
   MatTableModule,
   MatPaginatorModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    MatToolbarModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class AppMaterialModule {}
