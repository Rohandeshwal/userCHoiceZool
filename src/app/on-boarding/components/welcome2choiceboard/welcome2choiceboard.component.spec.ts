import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Welcome2choiceboardComponent } from './welcome2choiceboard.component';

describe('Welcome2choiceboardComponent', () => {
  let component: Welcome2choiceboardComponent;
  let fixture: ComponentFixture<Welcome2choiceboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Welcome2choiceboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Welcome2choiceboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
