import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ComponentModule } from './components/component.module';
import { LoaderService } from './components/loader/loader.service';
import { AppMaterialModule } from './material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AgentService } from './service/Agent.service';
import { AgentAuthGuard } from './service/auth-guards/agent-auth.guard';
import { DefaultAuthGuard } from './service/auth-guards/default-auth.guard';
import { ResearcherAuthGuard } from './service/auth-guards/researcher-auth.guard';
import { SponsorAuthGuard } from './service/auth-guards/sponsor-auth.guard';
import { AdminAuthGuard } from './service/auth-guards/admin-auth.guard';
import { AuthService } from './service/auth.service';
import { Configuration } from './service/configuration';
import { CustomFormService } from './service/CustomForm.service';
import { DataService } from './service/data.service';
import { HistorianService } from './service/historian.service';
import { ProtocolFileService } from './service/ProtocolFile.service';
import { FilesQueryService } from './service/queries/files-query-service';
import { FormValueQueryService } from './service/queries/form-value-query-service';
import { FormQueryService } from './service/queries/forms-query-service';
import { QueryService } from './service/queries/query-service';
import { ResearcherService } from './service/researcher.service';
import { SupplierService } from './service/Supplier.service';
import { SystemService } from './service/system-service';
import { TransactionService } from './service/transaction-service';
import { AdministratorService } from './service/administrator.service'
import { SponsorModule } from './sponsor/sponsor.module';
import { IdProviderService } from './utils/id-provider.service';

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
    ComponentModule,
    SponsorModule,
  ],
  providers: [
    Configuration,
    DataService,
    IdProviderService,
    ProtocolFileService,
    FilesQueryService,
    QueryService,
    CustomFormService,
    FormQueryService,
    TransactionService,
    AuthService,
    FormValueQueryService,
    SystemService,
    ResearcherService,
    HistorianService,
    LoaderService,
    ResearcherAuthGuard,
    SponsorAuthGuard,
    AgentAuthGuard,
    DefaultAuthGuard,
    SupplierService,
    AgentService,
    AdministratorService,
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
