import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCard } from './footer-card';

describe('FooterCard', () => {
  let component: FooterCard;
  let fixture: ComponentFixture<FooterCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
