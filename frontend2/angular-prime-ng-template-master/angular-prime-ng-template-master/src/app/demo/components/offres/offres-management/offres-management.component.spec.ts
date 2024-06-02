import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresManagementComponent } from './offres-management.component';

describe('OffresManagementComponent', () => {
  let component: OffresManagementComponent;
  let fixture: ComponentFixture<OffresManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffresManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
