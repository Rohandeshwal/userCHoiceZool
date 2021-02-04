import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchContextComponent } from './search-context.component';

describe('SearchContextComponent', () => {
  let component: SearchContextComponent;
  let fixture: ComponentFixture<SearchContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
