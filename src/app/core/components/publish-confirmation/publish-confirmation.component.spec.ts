import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishConfirmationComponent } from './publish-confirmation.component';

describe('PublishConfirmationComponent', () => {
  let component: PublishConfirmationComponent;
  let fixture: ComponentFixture<PublishConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
