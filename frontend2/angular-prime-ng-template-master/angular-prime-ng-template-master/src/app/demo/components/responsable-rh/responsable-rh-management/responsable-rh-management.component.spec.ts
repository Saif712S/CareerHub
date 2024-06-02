import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableRhManagementComponent } from './responsable-rh-management.component';

describe('ResponsableRhManagementComponent', () => {
  let component: ResponsableRhManagementComponent;
  let fixture: ComponentFixture<ResponsableRhManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsableRhManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsableRhManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
