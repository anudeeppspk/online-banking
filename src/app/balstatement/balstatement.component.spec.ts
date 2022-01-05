import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalstatementComponent } from './balstatement.component';

describe('BalstatementComponent', () => {
  let component: BalstatementComponent;
  let fixture: ComponentFixture<BalstatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalstatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalstatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
