import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CometitionsListComponent } from './list.component';

describe('ListComponent', () => {
  let component: CometitionsListComponent;
  let fixture: ComponentFixture<CometitionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CometitionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CometitionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
