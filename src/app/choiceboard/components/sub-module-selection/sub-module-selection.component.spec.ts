import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubModuleSelectionComponent } from './sub-module-selection.component';

describe('SubModuleSelectionComponent', () => {
  let component: SubModuleSelectionComponent;
  let fixture: ComponentFixture<SubModuleSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubModuleSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubModuleSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
