import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { R503industriaComponent } from './r503industria.component';

describe('R503industriaComponent', () => {
  let component: R503industriaComponent;
  let fixture: ComponentFixture<R503industriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R503industriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(R503industriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
