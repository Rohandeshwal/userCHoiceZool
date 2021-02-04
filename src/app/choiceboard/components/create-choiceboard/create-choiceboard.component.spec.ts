import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChoiceboardComponent } from './create-choiceboard.component';

describe('CreateChoiceboardComponent', () => {
  let component: CreateChoiceboardComponent;
  let fixture: ComponentFixture<CreateChoiceboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateChoiceboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChoiceboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
