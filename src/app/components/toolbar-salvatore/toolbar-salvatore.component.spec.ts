import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarSalvatoreComponent } from './toolbar-salvatore.component';

describe('ToolbarSalvatoreComponent', () => {
  let component: ToolbarSalvatoreComponent;
  let fixture: ComponentFixture<ToolbarSalvatoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarSalvatoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarSalvatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
