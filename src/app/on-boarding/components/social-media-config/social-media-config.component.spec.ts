import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaConfigComponent } from './social-media-config.component';

describe('SocialMediaConfigComponent', () => {
  let component: SocialMediaConfigComponent;
  let fixture: ComponentFixture<SocialMediaConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
