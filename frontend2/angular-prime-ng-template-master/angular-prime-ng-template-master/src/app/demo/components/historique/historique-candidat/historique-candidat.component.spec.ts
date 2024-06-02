import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueCandidatComponent } from './historique-candidat.component';

describe('HistoriqueCandidatComponent', () => {
  let component: HistoriqueCandidatComponent;
  let fixture: ComponentFixture<HistoriqueCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueCandidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriqueCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
