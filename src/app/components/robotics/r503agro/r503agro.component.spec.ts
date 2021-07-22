import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { R503agroComponent } from './r503agro.component';

describe('R503agroComponent', () => {
  let component: R503agroComponent;
  let fixture: ComponentFixture<R503agroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R503agroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(R503agroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
