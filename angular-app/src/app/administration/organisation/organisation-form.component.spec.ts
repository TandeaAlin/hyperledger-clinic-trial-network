import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppMaterialModule } from '../../material.module';
import { DataService } from '../../service/data.service';
import { ResearchSiteService } from '../../service/research-site.service';
import { SupplyOrganisationService } from '../../service/supply-organisation.service';
import { OrganisationFormComponent } from './organisation-form.component';
import { Configuration } from '../../service/configuration';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



describe('OrganisationFormComponent', () => {
  let component: OrganisationFormComponent;
  let fixture: ComponentFixture<OrganisationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AppMaterialModule,
        RouterTestingModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      declarations: [OrganisationFormComponent],
      providers:[
        ResearchSiteService,
        SupplyOrganisationService,
        DataService,
        Configuration
      ]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});