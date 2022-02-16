import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionsRoutingModule } from './competitions-routing.module';
import { CompetitionsDetailComponent } from './detail/detail.component';
import { CometitionsListComponent } from './list/list.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { SharedModule } from '../../shared/shared.module';
import { SeasonsComponent } from './detail/seasons/seasons.component';

@NgModule({
  declarations: [
    CompetitionsDetailComponent,
    SeasonsComponent,
    CometitionsListComponent
  ],
  imports: [
    CommonModule,
    CompetitionsRoutingModule,
    BreadcrumbModule,
    SharedModule
  ]
})
export class CompetitionsModule { }
