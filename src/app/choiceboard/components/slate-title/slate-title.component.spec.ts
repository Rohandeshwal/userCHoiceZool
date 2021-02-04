import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlateTitleComponent } from './slate-title.component';

describe('SlateTitleComponent', () => {
  let component: SlateTitleComponent;
  let fixture: ComponentFixture<SlateTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlateTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlateTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
