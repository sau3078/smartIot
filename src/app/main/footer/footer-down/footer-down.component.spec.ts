import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDownComponent } from './footer-down.component';

describe('FooterDownComponent', () => {
  let component: FooterDownComponent;
  let fixture: ComponentFixture<FooterDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
