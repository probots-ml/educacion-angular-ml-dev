import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionInstitutionsComponent } from './inscription-institutions.component';

describe('InscriptionInstitutionsComponent', () => {
  let component: InscriptionInstitutionsComponent;
  let fixture: ComponentFixture<InscriptionInstitutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionInstitutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionInstitutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
