import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { R502Component } from './r502.component';

describe('R502Component', () => {
  let component: R502Component;
  let fixture: ComponentFixture<R502Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R502Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(R502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
