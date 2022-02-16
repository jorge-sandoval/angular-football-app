import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'competitions',
    data: { breadcrumb: 'Home' }
  },
  {
    path: 'competitions',
    loadChildren: () => import('./competitions/competitions.module').then( m => m.CompetitionsModule )
  },
  {
    path: 'teams',
    data: { breadcrumb: { skip: true } },
    loadChildren: () => import('./teams/teams.module').then( m => m.TeamsModule )
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
