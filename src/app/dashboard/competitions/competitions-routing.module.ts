import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { CompetitionsDetailComponent } from './detail/detail.component';
import { CometitionsListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
    data: { breadcrumb: 'Competitions' }
  },
  {
    path: 'list', component: CometitionsListComponent, canActivate: [AuthGuard],
    data: { breadcrumb: 'List' }
  },
  {
    path: 'detail/:id', component: CompetitionsDetailComponent, canActivate: [AuthGuard],
    data: { breadcrumb: 'Detail' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetitionsRoutingModule { }
