import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearcherAuthGuard } from './service/auth-guards/researcher-auth.guard';
import { SponsorAuthGuard } from './service/auth-guards/sponsor-auth.guard';

const routes: Routes = [
  { path: '', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'administration', loadChildren: 'app/administration/administration.module#AdministrationModule' },
  { path: 'crf', loadChildren: 'app/crf/crf.module#CRFModule' },
  { path: 'trial', loadChildren: 'app/trial/trial.module#TrialModule', canActivate: [ResearcherAuthGuard] },
  { path: 'agent', loadChildren: 'app/agent/agent.module#AgentModule' },
  { path: 'sponsor', loadChildren: 'app/sponsor/sponsor.module#SponsorModule', canActivate: [SponsorAuthGuard] },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
