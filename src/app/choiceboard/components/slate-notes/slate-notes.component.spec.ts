import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlateNotesComponent } from './slate-notes.component';

describe('SlateNotesComponent', () => {
  let component: SlateNotesComponent;
  let fixture: ComponentFixture<SlateNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlateNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlateNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
