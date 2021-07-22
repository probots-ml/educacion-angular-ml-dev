import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { R503Component } from './r503.component';

describe('R503Component', () => {
  let component: R503Component;
  let fixture: ComponentFixture<R503Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R503Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(R503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
