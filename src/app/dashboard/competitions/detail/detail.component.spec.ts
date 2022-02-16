import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionsDetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: CompetitionsDetailComponent;
  let fixture: ComponentFixture<CompetitionsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
