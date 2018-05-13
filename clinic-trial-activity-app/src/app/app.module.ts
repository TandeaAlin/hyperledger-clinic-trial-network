import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './material.module';
import { DataService } from './service/data.service';
import { IdProviderService } from './utils/id-provider.service';
import { ProtocolFileService } from './service/ProtocolFile.service';
import { Configuration } from './service/configuration';
import { NavbarComponent } from './navbar/navbar.component';
import { FilesQueryService } from './service/queries/files-query-service';
import { QueryService } from './service/queries/query-service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
  ],
  providers: [
    Configuration,
    DataService,
    IdProviderService,
    ProtocolFileService,
    FilesQueryService,
    QueryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
