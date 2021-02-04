import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlateCommentsComponent } from './slate-comments.component';

describe('SlateCommentsComponent', () => {
  let component: SlateCommentsComponent;
  let fixture: ComponentFixture<SlateCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlateCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlateCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
