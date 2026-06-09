import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdCard } from './prd-card';

describe('PrdCard', () => {
  let component: PrdCard;
  let fixture: ComponentFixture<PrdCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrdCard],
    }).compileComponents();

    fixture = TestBed.createComponent(PrdCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
