import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { R501Component } from './r501.component';

describe('R501Component', () => {
  let component: R501Component;
  let fixture: ComponentFixture<R501Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R501Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(R501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
