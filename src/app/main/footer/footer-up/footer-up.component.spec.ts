import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterUpComponent } from './footer-up.component';

describe('FooterUpComponent', () => {
  let component: FooterUpComponent;
  let fixture: ComponentFixture<FooterUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
