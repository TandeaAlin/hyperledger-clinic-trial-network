import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './material.module';
import { DataService } from './service/data.service';
import { IdProviderService } from './utils/id-provider.service';
import { Configuration } from './service/configuration';
import { NavbarComponent } from './navbar/navbar.component';

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
    HttpModule,
    BrowserAnimationsModule,
    AppMaterialModule,
  ],
  providers: [
    Configuration,
    DataService,
    IdProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
