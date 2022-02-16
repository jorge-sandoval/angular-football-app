import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { YearPickerComponent } from './year-picker/year-picker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { NotificationComponent } from './notification/notification.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    NotFoundComponent,
    YearPickerComponent,
    ToolbarComponent,
    NotificationComponent,
    UnauthorizedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    OverlayModule,
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    OverlayModule,
    ToolbarComponent,
    YearPickerComponent
  ]
})
export class SharedModule { }
