import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { TeamsDetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: 'detail/:id', component: TeamsDetailComponent, canActivate: [AuthGuard],
    data: { breadcrumb: 'Teams  /  Detail' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
