import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsDetailComponent } from './detail/detail.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    TeamsDetailComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    BreadcrumbModule,
    SharedModule
  ]
})
export class TeamsModule { }
