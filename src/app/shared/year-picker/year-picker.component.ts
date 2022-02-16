import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import * as _moment from 'moment';
import { Moment } from 'moment';

const moment = _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    dateA11yLabel: 'LL',
  },
};

@Component({
  selector: 'app-year-picker',
  templateUrl: './year-picker.component.html',
  styleUrls: ['./year-picker.component.scss'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class YearPickerComponent {
  @Input() label = 'Year';
  @Output() yearSelected = new EventEmitter();

  control = new FormControl(moment());
  maxDate = moment();

  onYearSelected(momentDate: Moment, datepicker: MatDatepicker<Moment>) {
    const value = this.control.value;
    value.year(momentDate.year());
    this.control.setValue(value);
    datepicker.close();

    this.yearSelected.emit(value.format('YYYY'));
  }
}
