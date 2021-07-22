import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KinderbotComponent } from './kinderbot.component';

describe('KinderbotComponent', () => {
  let component: KinderbotComponent;
  let fixture: ComponentFixture<KinderbotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KinderbotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinderbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
