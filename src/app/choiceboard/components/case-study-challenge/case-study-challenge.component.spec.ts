import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudychallengeComponent } from './case-study-challenge.component';

describe('CaseStudychallengeComponent', () => {
  let component: CaseStudychallengeComponent;
  let fixture: ComponentFixture<CaseStudychallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseStudychallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudychallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
