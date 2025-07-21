import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeDashboardComponent } from './challenge-dashboard.component';

describe('ChallengeDashboard', () => {
  let component: ChallengeDashboardComponent;
  let fixture: ComponentFixture<ChallengeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChallengeDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
