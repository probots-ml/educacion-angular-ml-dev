import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvatoreComponent } from './salvatore.component';

describe('SalvatoreComponent', () => {
  let component: SalvatoreComponent;
  let fixture: ComponentFixture<SalvatoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvatoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
