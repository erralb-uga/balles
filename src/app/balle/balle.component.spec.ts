import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalleComponent } from './balle.component';

describe('BalleComponent', () => {
  let component: BalleComponent;
  let fixture: ComponentFixture<BalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
