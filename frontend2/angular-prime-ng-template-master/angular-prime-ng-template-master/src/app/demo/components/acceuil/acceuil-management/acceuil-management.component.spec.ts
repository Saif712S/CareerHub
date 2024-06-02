import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilManagementComponent } from './acceuil-management.component';

describe('AcceuilManagementComponent', () => {
  let component: AcceuilManagementComponent;
  let fixture: ComponentFixture<AcceuilManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceuilManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
