import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceboardPreviewComponent } from './choiceboard-preview.component';

describe('ChoiceboardPreviewComponent', () => {
  let component: ChoiceboardPreviewComponent;
  let fixture: ComponentFixture<ChoiceboardPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceboardPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceboardPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
