import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearcherAuthGuard } from './service/auth-guards/researcher-auth.guard';
import { SponsorAuthGuard } from './service/auth-guards/sponsor-auth.guard';
import { DefaultAuthGuard } from './service/auth-guards/default-auth.guard';
import { AgentAuthGuard } from './service/auth-guards/agent-auth.guard';
import { AdminAuthGuard } from './service/auth-guards/admin-auth.guard';

const routes: Routes = [
  { path: '', loadChildren: 'app/home/home.module#HomeModule'},
  { path: 'administration', loadChildren: 'app/administration/administration.module#AdministrationModule', canActivate: [AdminAuthGuard] },
  { path: 'crf', loadChildren: 'app/crf/crf.module#CRFModule',  canActivate: [DefaultAuthGuard] },
  { path: 'trial', loadChildren: 'app/trial/trial.module#TrialModule', canActivate: [ResearcherAuthGuard] },
  { path: 'agent', loadChildren: 'app/agent/agent.module#AgentModule', canActivate: [AgentAuthGuard] },
  { path: 'sponsor', loadChildren: 'app/sponsor/sponsor.module#SponsorModule', canActivate: [SponsorAuthGuard] },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
